/* @flow */

/*::
  declare class YauzlEntry {
    fileName: string,
  };

  declare class YauzlZipFile {
    on('entry', YauzlEntry => void): mixed;
    on('error', mixed => void): mixed;
    on('end', void => void): mixed;
    readEntry(): void;
    openReadStream(YauzlEntry, (mixed, stream$Readable) => void): void;
  };

  type Yauzl = {
    open(string, {}, (mixed, YauzlZipFile) => void): void
  };
*/

const https = require('https');
const fs = require('fs');
const path = require('path');
const yauzl/*: Yauzl */ = require('yauzl');

const Z3_VERSION = '4.5.0';


const platformMap/*: {[string]: ?string}*/ = {
  'win32': 'win',
  'linux': 'ubuntu-14.04',
  'darwin': 'osx-10.11.6',
};

const libExtMap/*: {[string]: string}*/ = {
  'win32': 'dll',
  'linux': 'so',
  'darwin': 'dylib',
}

const platform = platformMap[process.platform];

if (!platform) {
  throw new Error('Platform is not supported');
}

const libExt = libExtMap[process.platform];

const archMap/*: {[string]: ?string}*/ = {
  'ia32': 'x86',
  'x64': 'x64',
};

const arch = archMap[process.arch];

if (!arch) {
  throw new Error('Platform is not supported');
}

const url = `https://raw.githubusercontent.com/Z3Prover/bin/master/releases/z3-${Z3_VERSION}-${arch}-${platform}.zip`;

const download = url => new Promise((resolve, reject) => {
  console.log(`Downloading: ${url}`);
  const req = https.get(url, res => {

    if (res.statusCode !== 200) {
      return reject(new Error(`Statuc code: ${res.statusCode}`));
    }

    res.on('error', reject);

    const fileName = path.join(__dirname, 'z3.zip');
    const file = fs.createWriteStream(fileName);

    file.on('error', reject);


    res.pipe(file);
    res.on('end', () => resolve(fileName));
  });

  req.on('error', reject);
});

const unzip = file => new Promise((resolve, reject) => {
  const entryPart = `/bin/libz3.${libExt}`;
  let found = false;

  yauzl.open(file, { lazyEntries: true }, (err, zipfile) => {
    if (err) return reject(err);
    zipfile.on('error', reject);

    zipfile.readEntry();
    zipfile.on('entry', entry => {
      if (entry.fileName.endsWith(entryPart)) {
          zipfile.openReadStream(entry, (err, rs) => {
            if (err) return reject(err);

            const fileName = path.join(__dirname, `libz3.${libExt}`);
            const ws = fs.createWriteStream(fileName);

            rs.pipe(ws);

            rs.on('end', () => resolve(fileName));
          });
      } else {
        zipfile.readEntry();
      }
    });

    zipfile.on('end', () => {
      reject(new Error(`Entry ${entryPart} not found`));
    });
  });
});

download(url)
  .then(unzip)
  .then(name => {
    console.log(`Done: ${name}`);
  })
  .catch(err => {
    process.nextTick(() => {
      throw err;
    });
  });

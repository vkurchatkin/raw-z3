/* @flow */

import fs from 'fs';
import Writer from './Writer.js';

class FileWriter extends Writer {
  _fd: number;

  constructor(file: string) {
    super();
    this._fd = fs.openSync(file, 'w');
  }

  _write(s:string) {
    (fs:any).writeSync(this._fd, s);
  }

  close() {
    fs.closeSync(this._fd);
  }
}

export default FileWriter;

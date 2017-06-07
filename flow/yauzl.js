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

declare module "yauzl" {
  declare function open(string, {}, (mixed, YauzlZipFile) => void): void
}

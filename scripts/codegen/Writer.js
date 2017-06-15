/* @flow */

class Writer {
  _offset: string;

  constructor() {
    this._offset = '';
  }

  write(s: string) {
    if (s[0] === '\n') {
      s = s.slice(1);
    }

    const lines = s.split('\n');
    let minOffset = Infinity;

    for (const line of lines) {
      let offset = 0;

      for (let i = 0; i < line.length; i++) {
        if (line[i] !== ' ') break;
        offset++;
      }

      if (offset < line.length) {
        minOffset = Math.min(minOffset, offset);
      }

    }

    for (let i = 0; i < lines.length; i++) {
      let line = this._offset + lines[i].slice(minOffset);
      line = line.trimRight();
      if (i !== lines.length - 1) {
        line += '\n';
      }
      this._write(line);
    }
  }

  _write(s: string) {
    throw new Error('Not implemented');
  }

  push() {
    this._offset += '  ';
  }

  pop() {
    this._offset = this._offset.slice(2);
  }
}

export default Writer;

import { readFile } from 'node:fs/promises';
import { getDirName } from '../helpers.js';
import { createHash } from 'crypto';
import { join } from 'path';
import { EOL } from 'os';

const calculateHash = async () => {
  const name = './files/fileToCalculateHashFor.txt';

  const __dirname = getDirName(import.meta.url);

  const source = join(__dirname, name);

  try {
    const file = await readFile(source);

    const hex = createHash('sha256').update(file).digest('hex');

    console.log(`SHA256 hash of ${name}`);
    console.log('\x1b[33m%s\x1b[0m', hex, EOL);
  } catch (e) {
    console.log(e.message);
  }
};

await calculateHash();

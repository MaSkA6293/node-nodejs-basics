import { readFile } from 'node:fs/promises';
import { getDirName } from '../helpers.js';
import path from 'path';

const read = async () => {
  const name = 'files/fileToRead.txt';

  const __dirname = getDirName(import.meta.url);

  const pathToFile = path.join(__dirname, name);

  try {
    const data = await readFile(pathToFile, { encoding: 'utf-8' });
    console.log(data);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();

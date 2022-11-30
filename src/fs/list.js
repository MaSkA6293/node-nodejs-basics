import { readdir } from 'node:fs/promises';
import { getDirName } from '../helpers.js';
import path from 'path';

const list = async () => {
  const name = 'files';

  const __dirname = getDirName(import.meta.url);

  const pathToFolder = path.join(__dirname, name);

  try {
    const items = await readdir(pathToFolder);
    console.table(items);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();

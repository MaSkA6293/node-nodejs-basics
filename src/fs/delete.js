import { rm } from 'node:fs/promises';
import { getDirName } from '../helpers.js';
import { join } from 'path';

const remove = async () => {
  const fileName = 'fileToRemove.txt';

  const __dirname = getDirName(import.meta.url);

  const pathToFile = join(__dirname, `/files/${fileName}`);

  try {
    await rm(pathToFile);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await remove();

import { writeFile } from 'node:fs/promises';
import { getDirName } from '../helpers.js';
import path from 'path';

const create = async () => {
  const __dirname = getDirName(import.meta.url);

  const pathToFile = path.join(__dirname, '/files/fresh.txt');

  const content = 'I am fresh and young';

  try {
    await writeFile(pathToFile, content, {
      flag: 'wx',
    });
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();

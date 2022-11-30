import { readdir, copyFile, mkdir, stat } from 'node:fs/promises';
import { getDirName } from '../helpers.js';
import path from 'path';

const copy = async () => {
  const __dirname = getDirName(import.meta.url);

  const destination = path.join(__dirname, 'files_copy');

  const source = path.join(__dirname, 'files');

  try {
    const isSourceExist = await stat(source);

    if (!isSourceExist) throw new Error();

    await mkdir(destination);

    const files = await readdir(source);

    for (let file of files) {
      await copyFile(path.join(source, file), path.join(destination, file));
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

copy();

import { rename as renameFile } from 'fs/promises';
import { getDirName, isFileExist } from '../helpers.js';
import { join } from 'path';

const rename = async () => {
  const __dirname = getDirName(import.meta.url);

  const oldPathToFile = join(__dirname, '/files/wrongFilename.txt');
  const newPathToFile = join(__dirname, '/files/properFilename.md');

  try {
    const isExist = await isFileExist(newPathToFile);
    if (!isExist) {
      await renameFile(oldPathToFile, newPathToFile);
    } else {
      throw new Error();
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();

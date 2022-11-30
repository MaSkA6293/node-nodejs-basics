import { fileURLToPath } from 'url';
import { access } from 'fs/promises';
import path from 'path';

export const getDirName = (urlToPath) => {
  const filename = fileURLToPath(urlToPath);
  return path.dirname(filename);
};

export const isFileExist = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

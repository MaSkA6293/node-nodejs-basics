import { createReadStream, createWriteStream } from 'fs';
import { getDirName, isFileExist } from '../helpers.js';
import { createUnzip } from 'node:zlib';
import { join } from 'path';
import { EOL } from 'os';

const decompress = async () => {
  const destinationName = './files/fileToCompressUnzipped.txt';
  const sourceName = './files/archive.gz';

  const __dirname = getDirName(import.meta.url);

  const destination = join(__dirname, destinationName);
  const source = join(__dirname, sourceName);

  try {
    const isSourceExist = await isFileExist(source);

    if (!isSourceExist)
      throw new Error(
        `Decompress operation failed, file ${sourceName} doesn't exist.${EOL}Try to npm run zip:compress first`
      );

    const unzip = createUnzip();

    const readStream = createReadStream(source);
    const writeStream = createWriteStream(destination);

    readStream.pipe(unzip).pipe(writeStream);
  } catch (e) {
    console.log(e.message);
  }
};

await decompress();

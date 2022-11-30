import { createReadStream, createWriteStream } from 'fs';
import { getDirName, isFileExist } from '../helpers.js';
import { createGzip } from 'node:zlib';
import { join } from 'path';

const compress = async () => {
  const sourceName = './files/fileToCompress.txt';
  const destinationName = './files/archive.gz';

  const __dirname = getDirName(import.meta.url);

  const source = join(__dirname, sourceName);
  const destination = join(__dirname, destinationName);

  try {
    const isSourceExist = await isFileExist(source);

    if (!isSourceExist)
      throw new Error(
        `Compress operation failed, file ${sourceName} doesn't exist`
      );
    const gzip = createGzip();

    const readStream = createReadStream(source);
    const writeStream = createWriteStream(destination);

    readStream.pipe(gzip).pipe(writeStream);
  } catch (e) {
    console.log(e.message);
  }
};

await compress();

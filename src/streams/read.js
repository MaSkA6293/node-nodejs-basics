import { getDirName } from '../helpers.js';
import { createReadStream } from 'fs';
import { stdout } from 'process';
import { join } from 'path';

const read = async () => {
  const name = './files/fileToRead.txt';

  const __dirname = getDirName(import.meta.url);

  const source = join(__dirname, name);

  const readStream = createReadStream(source, 'utf8');

  let content = '';

  readStream
    .on('data', (chunk) => (content += chunk))
    .on('error', (err) => console.log(err.message))
    .on('end', () => stdout.write(`${content}\n`));
};

await read();

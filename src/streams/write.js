import { getDirName, isFileExist } from '../helpers.js';
import { createWriteStream } from 'fs';
import { stdin } from 'process';
import { join } from 'path';
import { EOL } from 'os';

const write = async () => {
  const name = './files/fileToWrite.txt';

  const __dirname = getDirName(import.meta.url);

  const source = join(__dirname, name);

  try {
    const isSourceExist = await isFileExist(source);

    if (!isSourceExist) throw new Error('Source is not exists');

    const writeStream = createWriteStream(source, { flags: 'a' });

    stdin.on('data', async (data) => {
      writeStream.write(data);
      console.log(
        `the text: "${data
          .toString()
          .trim()}" ${EOL}has been written into ${name}`
      );
    });
  } catch (e) {
    console.log('write error', e.message);
  }
};

await write();

import { fork } from 'child_process';
import { getDirName } from '../helpers.js';
import { join } from 'path';
import { EOL } from 'os';

const spawnChildProcess = async (args) => {
  const pathToChild = 'files/script.js';

  const __dirname = getDirName(import.meta.url);

  const childPath = join(__dirname, pathToChild);

  const child = fork(childPath, [...args.split(' ')], {
    silent: true,
  });

  process.stdin.on('data', (msg) => {
    console.log(`Send to the child process: ${msg.toString()}${EOL}`);
    child.stdin.write(msg);
  });

  child.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  child.stderr.on('data', (data) => {
    console.log(data.toString());
    child.kill();
  });
};

spawnChildProcess('--name Jon --surname Doe --email dog@dog.com');

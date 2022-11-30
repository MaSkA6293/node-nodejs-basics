import { stdout, stdin } from 'process';
import stream from 'stream';
import { EOL } from 'os';

const Transform = stream.Transform;

const transform = async () => {
  const createReverseStream = () =>
    new Transform({
      transform(chunk, enc, cb) {
        const reverse =
          chunk.toString().replace(EOL, '').split('').reverse().join('') + EOL;
        cb(null, reverse);
      },
    });

  const reverse = createReverseStream();
  stdin.pipe(reverse).pipe(stdout);
};

await transform();

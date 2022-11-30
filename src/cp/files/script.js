import { EOL } from 'os';
import {printArguments} from "../../helpers.js"

 const args = process.argv.slice(2);

 printArguments(args)

 const echoInput = (chunk) => {
  process.stdout.write(
    `Hello parent, I've got a message from you. You've sent me a message: ${chunk.toString()}${EOL}`
  );
};

process.stdin.on('data', echoInput);

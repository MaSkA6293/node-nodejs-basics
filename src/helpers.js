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


export const printArguments = (args)=>{
 const argToPrint = args.reduce((acc, curr, index, arr) => {
    if (curr.substring(0, 2) === '--' && arr[index + 1]) {
     return   [...acc, {name:curr.slice(2) ,value: arr[index + 1]}]
    }
    return acc;
  }, [])   
  console.log (`Hello, I'm a child and I've got ${argToPrint.length} argument${argToPrint.length>1?"s":""}, here there are:`)
  console.table(argToPrint);
}
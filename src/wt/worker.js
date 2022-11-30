import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  console.log(
    `Hello I'm cpu №${workerData.cpu}, I've received the data ${workerData.number}`
  );
  parentPort.postMessage(nthFibonacci(workerData.number));
};

sendResult();

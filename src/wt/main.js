import { getDirName } from '../helpers.js';
import { Worker } from 'worker_threads';
import { join } from 'path';
import { cpus } from 'os';

const performCalculations = async () => {
  const name = 'worker.js';

  const __dirname = getDirName(import.meta.url);

  const pathToWorker = join(__dirname, name);

  const arrOfKernels = cpus();

  let number = 10;

  const results = await Promise.allSettled(
    arrOfKernels.map((_, i) => {
      return new Promise((res, rej) => {
        const worker = new Worker(pathToWorker, {
          workerData: { number: number++, cpu: i + 1 },
        });
        worker.on('message', (data) => res(data));
        worker.on('error', (data) => rej(data));
      });
    })
  );

  const printResults = (results) =>
    results.map((item) => {
      return {
        status: item.status === 'fulfilled' ? 'resolved' : 'error',
        data: item.status === 'fulfilled' ? item.value : null,
      };
    });

  console.log(printResults(results));
};

await performCalculations();

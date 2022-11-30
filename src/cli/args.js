const parseArgs = () => {
  const args = process.argv.slice(2);

  const result = args.reduce((acc, curr, index, arr) => {
    if (curr.substring(0, 2) === '--' && arr[index + 1]) {
      acc.push(`${curr.slice(2)} is ${arr[index + 1]}`);
    }
    return acc;
  }, []);

  console.log(result.join(', '));
};

parseArgs();

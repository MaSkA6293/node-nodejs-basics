const parseEnv = () => {
  const rssVariables = Object.entries(process.env).reduce(
    (acc, [key, value]) => {
      if (key.substring(0, 4) === 'RSS_')
        return (acc = [...acc, `${key}=${value}`]);
      return acc;
    },
    []
  );
  console.log(rssVariables.join('; '));
};

parseEnv();

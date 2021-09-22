const pickRandom = (arr, count) => {
  // eslint-disable-next-line no-underscore-dangle
  const _arr = [...arr];
  return [...Array(count)].map(
    () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
  );
};

export default pickRandom;

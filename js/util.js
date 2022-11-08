const checkStringLength = (string, length) => string.length <= length;

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 5) => {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return Number(result.toFixed(digits));
};

const getArray = (array) => {
  const maxLength = array.length;
  const lengthOfArray = getRandomPositiveInteger(1, maxLength);
  const arrayRandom = [];

  while (arrayRandom.length < lengthOfArray) {
    const indexOfEl = getRandomPositiveInteger(0, maxLength - 1);
    const el = array[indexOfEl];

    if (!arrayRandom.includes(el)) {
      arrayRandom.push(el);
    }
  }
  return arrayRandom;
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const makeCounterIndex = () => {
  let count = 0;

  return () => {
    count++;

    return count;
  };
};

export {
  checkStringLength,
  getRandomArrayElement,
  getRandomPositiveFloat,
  getRandomPositiveInteger,
  getArray,
  makeCounterIndex
};

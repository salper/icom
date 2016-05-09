/**
 * Flatten provided array of [arrays of] integers.
 *
 * No defensive programming here:
 * - xs is expected to be an array
 * - x is expected to be an integer or an array of integers
 *
 * @param {Number[]} xs
 * @returns {Numbers[]}
 */
const flatten = ([x, ...xs] = []) => {
  if (typeof x === 'undefined')
    return [];

  return Array.isArray(x)
    ? [...flatten(x), ...flatten(xs)]
    : [x, ...flatten(xs)];
};

export default flatten;

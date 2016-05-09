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

// Fully recursive.
const flatten1 = ([x, ...xs] = []) => {
  if (typeof x === 'undefined')
    return [];

  return Array.isArray(x)
    ? [...flatten1(x), ...flatten1(xs)]
    : [x, ...flatten1(xs)];
};

// Built in reducer.
const flatten2 = (xs = []) =>
  xs.reduce((ys, x) =>
    Array.isArray(x) ? [...ys, ...flatten2(x)] : [...ys, x], []);

export default flatten2;

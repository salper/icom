/**
 * Recursively flattens provided array.
 *
 * @param {*[]} xs
 * @returns {*[]}
 */
const flatten = (xs = []) =>
  xs.reduce((ys, x) =>
    Array.isArray(x) ? [...ys, ...flatten(x)] : [...ys, x], []);

export default flatten;

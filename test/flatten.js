import flatten from '../src/flatten';

describe('flatten', () => {
  describe('given no arguments', () => {
    it('should return []', () =>
      expect(flatten()).to.eql([]));
  });

  describe('given []', () => {
    it('should return []', () =>
      expect(flatten([])).to.eql([]));
  });

  describe('given [1, 2, 3, 4]', () => {
    it('should return [1, 2, 3, 4]', () =>
      expect(flatten([1, 2, 3, 4])).to.eql([1, 2, 3, 4]));
  });

  describe('given [1, [2, [3, [4]]]]', () => {
    it('should return [1, 2, 3, 4]', () =>
      expect(flatten([1, [2, [3, [4]]]])).to.eql([1, 2, 3, 4]));
  });
});

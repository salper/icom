import {
  toRadians,
  pointInRadians,
  getCentralAngle,
  getArcLength,
  getDistanceFrom
} from '../src/coord';

describe('Coord.toRadians', () => {
  describe('given 60°', () => {
    it('should return π/3', () => {
      expect(toRadians(60)).to.equals(Math.PI / 3);
    });
  });

  describe('given 90°', () => {
    it('should return π/2', () => {
      expect(toRadians(90)).to.equals(Math.PI / 2);
    });
  });
});

describe('Coord.pointInRadians', () => {
  describe('given {latitude: 60°, longitude: 90°}', () => {
    it('should return {latitude: π/3, longitude: π/2}', () => {
      expect(pointInRadians({latitude: 60, longitude: 90}))
        .to.eql({latitude: Math.PI / 3, longitude: Math.PI / 2});
    });
  });
});

describe('Coord.getCentralAngle', () => {
  describe('given {latitude: π/3, longitude: 0}, {latitude: 2*π/3, longitude: 0}', () => {
    it('should return π/3', () => {
      const x = {latitude: Math.PI / 3, longitude: 0};
      const y = {latitude: 2 * Math.PI / 3, longitude: 0};

      expect(getCentralAngle(x, y)).to.equals(Math.PI / 3);
    });
  });
});

describe('Coord.getArcLength', () => {
  describe('given radius: 1 and angle: π/2', () => {
    it('should return 2πr/4', () => {
      expect(getArcLength(1, Math.PI / 2)).to.equals(2 * Math.PI / 4);
    });
  });
});

describe('Coord.getDistanceFrom', () => {
  describe('given x as Paris and y as London', () => {
    it('should return ≈ 344km', () => {
      const x = pointInRadians({latitude: 	48.856578, longitude: 2.351828});
      const y = pointInRadians({latitude: 	51.507222, longitude: -0.1275});
      expect(getDistanceFrom(x, y) / 344).to.be.within(0, 1);
    });
  });
});

/**
 * Earth radius approximated in km.
 *
 * @const {Number}
 */
export const EARTH_RADIUS = 6371;

/**
 * Convert degrees to radians.
 *
 * @param {Number} degrees
 * @return {Number}
 */
export const toRadians = degrees =>
  degrees * Math.PI / 180

/**
 * @typedef {Object} Point
 * @param {Number} x.latitude
 * @param {Number} x.longitude
 */

/**
 * Convert points latitude/longitude in radians.
 *
 * @param {Point} x
 * @returns {Point}
 */
export const pointInRadians = ({latitude, longitude}) =>
  ({latitude: toRadians(latitude), longitude: toRadians(longitude)});

/**
 * Compute central angle between to points.
 *
 * @param {Point} x
 * @param {Point} y
 * @return {Number}
 */
export const getCentralAngle = (x, y) =>
  Math.acos(Math.sin(x.latitude) * Math.sin(y.latitude)
  +
  Math.cos(x.latitude) * Math.cos(y.latitude) * Math.cos(Math.abs(x.longitude - y.longitude)));

/**
 * Compute arc length.
 *
 * @param {Number} radius
 * @param {number} angle
 * @returns {Number}
 */
export const getArcLength = (radius, angle) =>
  radius * angle;

/**
 * Compute distance between two points in km.
 *
 * @param {Point} x
 * @param {Point} x
 * @return {Number}
 */
export const getDistanceFrom = (x, y) =>
  getArcLength(EARTH_RADIUS, getCentralAngle(x, y));

/**
 * Returns a function that generates a pseudo-random number.
 *
 * @param {number} x - Progress value (should be between 0 a 1)
 * @param {number} a - Minimum value
 * @param {number} b - Maximum value
 * @returns {number} - Returns the linear interpolation between minimum and maximum 
 */
export default function linear(x, a, b) {
  return (x * (b - a)) + a;
} 

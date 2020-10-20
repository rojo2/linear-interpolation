/**
 * Returns the linear interpolation between `a` and `b`.
 * @param {number} x Interpolation percentage expressed as a number between 0 and 1 
 * @param {number} a Initial value 
 * @param {number} b Final value
 * @returns {number} Interpolated value 
 */
export default function linear(x, a, b) {
  return (1 - x) * a + x * b
} 

/**
 * This function calculates the square length of the hypotenuse on a right triangle
 * by taking the sum of the squares of the lengths of the catheti
 *
 * @example
 * // returns 8
 * pythagorean_theorem(2, 2);
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} sum of the squares of the parameters
 *
 * @version 1.0.0-final
 * @copyright ca. 570 B.C. Pythagoras of Samos
 */
function pythagorean_theorem(a, b) {
  return a ** 2 + b ** 2;
}

'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 6. Circle of Numbers'.
 *
 * Consider integer numbers from <code>0</code> to <code>n - 1</code> written
 * down along the circle in such a way that the distance between any two
 * neighboring numbers is equal (note that <code>0</code> and <code>n - 1</code>
 * are neighboring, too).
 *
 * Given <code>n</code> and <code>firstNumber</code>, find the number which is
 * written in the radially opposite position to <code>firstNumber</code>.
 *
 * <strong>Example</strong>
 * <br />
 * For <code>n = 10</code> and <code>firstNumber = 2</code>, the output should
 * be <code>circleOfNumbers(n, firstNumber) = 7</code>.
 * <br />
 * <img src="../src/resources/arcade/algorithmic/the-core/circleOfNumbers.png"
   alt="Illustration picture for the task">
 *
 * @param {number} n
 * A positive <strong>even</strong> integer.
 * Guaranteed constraints:
 * <code>4 ≤ n ≤ 20</code>.
 *
 * @param {number} firstNumber
 * Integer.
 * Guaranteed constraints:
 * <code>0 ≤ firstNumber ≤ n - 1</code>.
 *
 * @returns {number}
 * Integer.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function circleOfNumbers(n, firstNumber) {
  return (firstNumber + n / 2) % n;
}

module.exports = circleOfNumbers;

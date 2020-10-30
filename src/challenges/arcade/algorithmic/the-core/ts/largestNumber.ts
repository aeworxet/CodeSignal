/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 2. Largest Number'.
 *
 * Given an integer <code>n</code>, return the largest number that contains
 * exactly <code>n</code> digits.
 *
 * @param {number} n
 * Integer.
 * Guaranteed constraints:
 * <code>1 ≤ n ≤ 9</code>.
 *
 * @returns {number}
 * The largest integer of length <code>n</code>.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function largestNumber(n: number): number {
  return Math.pow(10, n) - 1;
}

module.exports = largestNumber;

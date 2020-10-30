'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 1. Add Two Digits'.
 *
 * You are given a two-digit integer <code>n</code>. Return the sum of its
 * digits.
 *
 * @param {number} n
 * A positive two-digit integer.
 * Guaranteed constraints:
 * <code>10 ≤ n ≤ 99</code>.
 *
 * @returns {number}
 * Integer. The sum of the first and second digits of the input number.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */
// prettier-ignore
function addTwoDigits(n) {
  return n.toString().split('').map(Number).reduce((a, b) => a + b);
}

module.exports = addTwoDigits;

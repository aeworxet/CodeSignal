'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 11. isLucky'.
 *
 * Ticket numbers usually consist of an even number of digits. A ticket number
 * is considered <em>lucky</em> if the sum of the first half of the digits is
 * equal to the sum of the second half.
 *
 * Given a ticket number <code>n</code>, determine if it's <em>lucky</em> or
 * not.
 *
 * @param {number} n
 * A ticket number represented as a positive integer with an even number of
 * digits.
 * Guaranteed constraints:
 * <code>10 ≤ n < 10<sup>6</sup><code>.
 *
 * @returns {boolean}
 * <code>true</code> if <code>n</code> is a lucky ticket number,
 * <code>false</code> otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function isLucky(n) {
  const a = ('' + n).split('').map(Number);
  const b = a.slice(0, a.length / 2).reduce((d, e) => d + e);
  const c = a.slice(a.length / 2, a.length).reduce((d, e) => d + e);
  return b === c;
}

module.exports = isLucky;

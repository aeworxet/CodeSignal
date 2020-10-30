'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 5. Max Multiple'.
 *
 * Given a <code>divisor</code> and a <code>bound</code>, find the largest
 * integer <code>N</code> such that:
 *   - <code>N</code> is divisible by <code>divisor</code>.
 *   - <code>N</code> is less than or equal to <code>bound</code>.
 *   - <code>N</code> is greater than <code>0</code>.
 *
 * It is guaranteed that such a number exists.
 *
 * @param {number} divisor
 * Integer.
 * Guaranteed constraints:
 * <code>2 ≤ divisor ≤ 10</code>.
 *
 * @param {number} bound
 * Integer.
 * Guaranteed constraints:
 * <code>5 ≤ bound ≤ 100</code>.
 *
 * @returns {number}
 * The largest integer not greater than <code>bound</code> that is divisible by
 * <code>divisor</code>.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

module.exports = maxMultiple;

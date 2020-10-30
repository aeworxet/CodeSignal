'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 8. Phone Call'.
 *
 * Some phone usage rate may be described as follows:
 *   - first minute of a call costs <code>min1</code> cents,
 *   - each minute from the 2<sup>nd</sup> up to 10<sup>th</sup> (inclusive)
 *     costs <code>min2_10</code> cents
 *   - each minute after 10<sup>th</sup> costs <code>min11</code> cents.
 *
 * You have <code>s</code> cents on your account before the call. What is the
 * duration of the longest call (in minutes rounded down to the nearest integer)
 * you can have?
 *
 * @param {number} min1
 * Integer.
 * Guaranteed constraints:
 * <code>1 ≤ min1 ≤ 10</code>.
 *
 * @param {number} min2_10
 * Integer.
 * Guaranteed constraints:
 * <code>1 ≤ min2_10 ≤ 10</code>.
 *
 * @param {number} min11
 * Integer.
 * Guaranteed constraints:
 * <code>1 ≤ min11 ≤ 10</code>.
 *
 * @param {number} s
 * Integer.
 * Guaranteed constraints:
 * <code>2 ≤ s ≤ 500</code>.
 *
 * @returns {number}
 * Integer.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function phoneCall(min1, min2_10, min11, s) {
  let mins;
  if (min1 > s) {
    mins = 0;
    return mins;
  } else {
    mins = 1;
    s -= min1;
  }
  if (min2_10 * 9 <= s) {
    mins += 9;
    s -= min2_10 * 9;
  } else {
    mins += parseInt(s / min2_10, 10);
  }
  if (mins === 10) {
    mins += parseInt(s / min11, 10);
  }
  return mins;
}

module.exports = phoneCall;

'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 9. allLongestStrings'.
 *
 * Given an array of strings, return another array containing all of its longest
 * strings.
 *
 * @param {string[]} inputArray
 * A non-empty array of strings.
 * Guaranteed constraints:
 * <code>1 ≤ inputArray.length ≤ 10</code>,
 * <code>1 ≤ inputArray[i].length ≤ 10</code>.
 *
 * @returns {string[]}
 * Array of the longest strings, stored in the same order as in the
 * <code>inputArray</code>.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function allLongestStrings(inputArray) {
  const x = Math.max(...inputArray.map((i) => i.length));
  return inputArray.filter((i) => i.length === x);
}

module.exports = allLongestStrings;

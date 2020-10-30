'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 10. commonCharacterCount'.
 *
 * Given two strings, find the number of common characters between them.
 *
 * @param {string} s1
 * A string consisting of lowercase English letters.
 * Guaranteed constraints:
 * <code>1 ≤ s1.length < 15</code>.
 *
 * @param {string} s2
 * A string consisting of lowercase English letters.
 * Guaranteed constraints:
 * <code>1 ≤ s2.length < 15</code>.
 *
 * @returns {number}
 * Integer.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function commonCharacterCount(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    s2 = s2.replace(s1[i], '&');
  }
  return s2.replace(/[^&]/g, '').length;
}

module.exports = commonCharacterCount;

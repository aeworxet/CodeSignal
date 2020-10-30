'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 3. checkPalindrome'.
 *
 * Given the string, check if it is a palindrome.
 *
 * @param {string} inputString
 * A non-empty string consisting of lowercase characters.
 * Guaranteed constraints:
 * <code>1 ≤ inputString.length ≤ 10<sup>5</sup></code>.
 *
 * @returns {boolean}
 * <code>true</code> if <code>inputString</code> is a palindrome,
 * <code>false</code> otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function checkPalindrome(inputString) {
  return inputString === inputString.split('').reverse().join('');
}

module.exports = checkPalindrome;

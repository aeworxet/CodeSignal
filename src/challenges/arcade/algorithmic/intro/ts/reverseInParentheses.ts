/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 13. reverseInParentheses'.
 *
 * Write a function that reverses characters in (possibly nested) parentheses in
 * the input string.
 *
 * Input strings will always be well-formed with matching <code>()</code>s.
 *
 * @param {string} inputString
 * A string consisting of lowercase English letters and the characters
 * <code>(</code> and <code>)</code>. It is guaranteed that all parentheses in
 * <code>inputString</code> form a regular bracket sequence.
 * Guaranteed constraints:
 * <code>0 ≤ inputString.length ≤ 50</code>.
 *
 * @returns {string}
 * <code>inputString</code>, with all the characters that were in parentheses
 * reversed.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function reverseInParentheses(inputString: string): string {
  const inputStringAsArray: string[] = inputString.split('');
  for (let i = inputStringAsArray.length - 1; i >= 0; i--) {
    if (inputStringAsArray[i] === '(') {
      for (let k = i; k <= inputStringAsArray.length - 1; k++) {
        if (inputStringAsArray[k] === ')') {
          if (inputStringAsArray.slice(i, i + 1).toString() === '(') {
            const inputStringElementReversed: string[] = inputStringAsArray
              .slice(i + 1, k)
              .reverse();
            inputStringAsArray.splice(i, 1);
            inputStringAsArray.splice(k - 1, 1);
            if (inputStringElementReversed.length === 0) {
              break;
            }
            for (let x = 0; x < inputStringElementReversed.length; x++) {
              inputStringAsArray[x + i] = inputStringElementReversed[x];
            }
          }
        }
      }
    }
  }
  inputString = inputStringAsArray.join('');
  return inputString;
}

module.exports = reverseInParentheses;

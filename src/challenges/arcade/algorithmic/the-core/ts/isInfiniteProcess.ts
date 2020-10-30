/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 12. Is Infinite Process?'.
 *
 * Given integers <code>a</code> and <code>b</code>, determine whether the
 * following pseudocode results in an infinite loop
 *
 * <pre>while a is not equal to b do
 *   increase a by 1
 *   decrease b by 1</pre>
 *
 * Assume that the program is executed on a virtual machine which can store
 * arbitrary long numbers and execute forever.
 *
 * @param {number} a
 * Integer.
 * Guaranteed constraints:
 * <code>0 ≤ a ≤ 20</code>.
 *
 * @param {number} b
 * Integer.
 * Guaranteed constraints:
 * <code>0 ≤ b ≤ 20</code>.
 *
 * @returns {boolean}
 * <code>true</code> if the pseudocode will never stop, <code>false</code>
 * otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function isInfiniteProcess(a: number, b: number): boolean {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  while (a !== b) {
    min = ++a;
    max = --b;
    if (min > max) {
      return true;
    }
  }
  return false;
}

module.exports = isInfiniteProcess;

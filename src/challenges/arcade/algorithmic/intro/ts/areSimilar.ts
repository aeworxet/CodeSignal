/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 16. Are Similar?'.
 *
 * Two arrays are called <em>similar</em> if one can be obtained from another
 * by swapping at most one pair of elements in one of the arrays.
 *
 * Given two arrays <code>a</code> and <code>b</code>, check whether they are
 * <em>similar</em>.
 *
 * @param {number[]} a
 * Array of integers.
 * Guaranteed constraints:
 * <code>3 ≤ a.length ≤ 10<sup>5</sup></code>,
 * <code>1 ≤ a[i] ≤ 1000</code>.
 *
 * @param {number[]} b
 * Array of integers of the same length as <code>a</code>.
 * Guaranteed constraints:
 * <code>b.length = a.length</code>,
 * <code>1 ≤ b[i] ≤ 1000</code>.
 *
 * @returns {boolean}
 * <code>true</code> if <code>a</code> and <code>b</code> are similar,
 * <code>false</code> otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function areSimilar(a: number[], b: number[]): boolean {
  const aFiltered: number[] = a.filter((value, index) => value !== b[index]);
  const bFiltered: number[] = b.filter((value, index) => value !== a[index]);
  if (
    (aFiltered.length < 2 && aFiltered.length === bFiltered.length) ||
    (aFiltered.length === 2 &&
      aFiltered.reverse().every((value, index) => value === bFiltered[index]))
  ) {
    return true;
  }
  return false;
}

module.exports = areSimilar;

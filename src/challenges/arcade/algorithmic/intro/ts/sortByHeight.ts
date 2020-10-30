/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 12. sortByHeight'.
 *
 * Some people are standing in a row in a park. There are trees between them
 * which cannot be moved. Your task is to rearrange the people by their heights
 * in a non-descending order without moving the trees. People can be very tall!
 *
 * @param {number[]} a
 * Array of integers. If <code>a[i] = -1</code>, then the
 * <code>i<sup>th</sup></code> position is occupied by a tree. Otherwise
 * <code>a[i]</code> is the height of a person standing in the
 * <code>i<sup>th</sup></code> position.
 * Guaranteed constraints:
 * <code>1 ≤ a.length ≤ 1000</code>,
 * <code>-1 ≤ a[i] ≤ 1000</code>.
 *
 * @returns {number[]}
 * Sorted array <code>a</code> with all the trees untouched.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function sortByHeight(a: number[]): number[] {
  const b = a.filter((i) => i !== -1).sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      b.splice(i, 0, -1);
    }
  }
  return b;
}

module.exports = sortByHeight;

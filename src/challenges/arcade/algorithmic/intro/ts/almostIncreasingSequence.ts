/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 7. almostIncreasingSequence'.
 *
 * Given a sequence of integers as an array, determine whether it is possible to
 * obtain a strictly increasing sequence by removing no more than one element
 * from the array.
 *
 * Note: sequence <code>a<sub>0</sub></code>, <code>a<sub>1</sub></code>, ...,
 * <code>a<sub>n</sub></code> is considered to be a strictly increasing if
 * <code>a<sub>0</sub> < a<sub>1</sub> < ... < a<sub>n</sub></code>. Sequence
 * containing only one element is also considered to be strictly increasing.
 *
 * @param {number[]} sequence
 * Array of integers.
 * Guaranteed constraints:
 * <code>2 ≤ sequence.length ≤ 10<sup>5</sup></code>,
 * <code>-10<sup>5</sup> ≤ sequence[i] ≤ 10<sup>5</sup></code>.
 *
 * @returns {boolean}
 * Return <code>true</code> if it is possible to remove one element from the
 * array in order to get a strictly increasing sequence, otherwise return
 * <code>false</code>.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function almostIncreasingSequence(sequence: number[]): boolean {
  let a;
  let n = sequence.length;
  while (n--) {
    a = sequence.slice();
    a.splice(n, 1);
    if (
      a.every(function (i, index, arr) {
        if (index === 0) {
          return true;
        } else {
          return i > arr[index - 1];
        }
      })
    ) {
      return true;
    }
  }
  return false;
}

module.exports = almostIncreasingSequence;

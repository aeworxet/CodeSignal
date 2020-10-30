'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 3. Candies'.
 *
 * <code>n</code> children have got <code>m</code> pieces of candy. They want to
 * eat as much candy as they can, but each child must eat exactly the same
 * amount of candy as any other child. Determine how many pieces of candy will
 * be eaten by all the children together. Individual pieces of candy cannot be
 * split.
 *
 * @param {number} n
 * Integer. The number of children.
 * Guaranteed constraints:
 * <code>1 ≤ n ≤ 10</code>.
 *
 * @param {number} m
 * Integer. The number of pieces of candy.
 * Guaranteed constraints:
 * <code>2 ≤ m ≤ 100</code>.
 *
 * @returns {number}
 * Integer. The total number of pieces of candy the children will eat
 * provided they eat as much as they can and all children eat the same amount.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function candies(n, m) {
  return m - (m % n);
}

module.exports = candies;

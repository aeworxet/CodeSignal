'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 17. Kill K-th Bit'.
 *
 * In order to stop the Mad Coder evil genius you need to decipher the encrypted
 * message he sent to his minions. The message contains several numbers that,
 * when typed into a supercomputer, will launch a missile into the sky blocking
 * out the sun, and making all the people on Earth grumpy and sad.
 *
 * You figured out that some numbers have a modified single digit in their
 * binary representation. More specifically, in the given number <code>n</code>
 * the <code>k<sup>th</sup></code> bit from the right was initially set to
 * <code>0</code>, but its current value might be different. It's now up to you
 * to write a function that will change the <code>k<sup>th</sup></code> bit of
 * <code>n</code> back to <code>0</code>.
 *
 * @param {number} n
 * Integer.
 * Guaranteed constraints:
 * <code>0 ≤ n ≤ 2<sup>31</sup> - 1</code>.
 *
 * @param {number} k
 * The <code>1</code>-based index of the changed bit (counting from the right).
 * Guaranteed constraints:
 * <code>1 ≤ k ≤ 31</code>.
 *
 * @returns {number}
 * Integer.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function killKthBit(n, k) {
  return n & ~(1 << (k - 1));
}

module.exports = killKthBit;

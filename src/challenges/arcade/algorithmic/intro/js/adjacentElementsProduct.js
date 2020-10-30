'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 4. adjacentElementsProduct'.
 *
 * Given an array of integers, find the pair of adjacent elements that has the
 * largest product and return that product.
 *
 * @param {number[]} inputArray
 * An array of integers containing at least two elements.
 * Guaranteed constraints:
 * <code>2 ≤ inputArray.length ≤ 10</code>,
 * <code>-1000 ≤ inputArray[i] ≤ 1000</code>.
 *
 * @returns {number}
 * Integer. The largest product of adjacent elements.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function adjacentElementsProduct(inputArray) {
  let largest = -1000;
  for (let i = 0; i < inputArray.length - 1; i++) {
    largest = Math.max(largest, inputArray[i] * inputArray[i + 1]);
  }
  return largest;
}

module.exports = adjacentElementsProduct;

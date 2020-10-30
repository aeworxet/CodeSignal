/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 10. Knapsack Light'.
 *
 * You found two items in a treasure chest! The first item weighs
 * <code>weight1</code> and is worth <code>value1</code>, and the second item
 * weighs <code>weight2</code> and is worth <code>value2</code>. What is the
 * total maximum value of the items you can take with you, assuming that your
 * max weight capacity is <code>maxW</code> and you can't come back for the
 * items later?
 *
 * <strong>Note</strong> that there are only two items and you can't bring more
 * than one item of each type, i.e. you can't take two first items or two second
 * items.
 *
 * @param {number} value1
 * Integer.
 * Guaranteed constraints:
 * <code>2 ≤ value1 ≤ 20</code>.
 *
 * @param {number} weight1
 * Integer.
 * Guaranteed constraints:
 * <code>2 ≤ weight1 ≤ 10</code>.
 *
 * @param {number} value2
 * Integer.
 * Guaranteed constraints:
 * <code>2 ≤ value2 ≤ 20</code>.
 *
 * @param {number} weight2
 * Integer.
 * Guaranteed constraints:
 * <code>2 ≤ weight2 ≤ 10</code>.
 *
 * @param {number} maxW
 * Integer.
 * Guaranteed constraints:
 * <code>1 ≤ maxW ≤ 20</code>.
 *
 * @returns {number}
 * Integer.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function knapsackLight(
  value1: number,
  weight1: number,
  value2: number,
  weight2: number,
  maxW: number
): number {
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  }
  if (weight1 <= maxW && weight2 <= maxW) {
    return Math.max(value1, value2);
  }
  if (weight1 <= maxW) {
    return value1;
  }
  if (weight2 <= maxW) {
    return value2;
  }
  return 0;
}

module.exports = knapsackLight;

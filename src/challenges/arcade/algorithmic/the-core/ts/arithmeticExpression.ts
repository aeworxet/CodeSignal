/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 13. Arithmetic Expression'.
 *
 * Consider an arithmetic expression of the form <code>a#b=c</code>. Check
 * whether it is possible to replace <code>#</code> with one of the four signs:
 * <code>+</code>, <code>-</code>, <code>*</code> or <code>/</code> to obtain a
 * correct expression.
 *
 * @param {number} a
 * Integer.
 * Guaranteed constraints:
 * <code>1 ≤ a ≤ 20</code>.
 *
 * @param {number} b
 * Integer.
 * Guaranteed constraints:
 * <code>1 ≤ b ≤ 20</code>.
 *
 * @param {number} c
 * Integer.
 * Guaranteed constraints:
 * <code>0 ≤ c ≤ 20</code>.
 *
 * @returns {boolean}
 * <code>true</code> if the desired replacement is possible, <code>false</code>
 * otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function arithmeticExpression(a: number, b: number, c: number): boolean {
  return a + b === c || a - b === c || a * b === c || a / b === c;
}

module.exports = arithmeticExpression;

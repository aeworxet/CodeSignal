/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 15. Will You?'.
 *
 * Once Mary heard a famous song, and a line from it stuck in her head. That
 * line was "Will you still love me when I'm no longer young and beautiful?".
 * Mary believes that a person is loved if and only if he/she is both young and
 * beautiful, but this is quite a depressing thought, so she wants to put her
 * belief to the test.
 *
 * Knowing whether a person is <code>young</code>, <code>beautiful</code> and
 * <code>loved</code>, find out if they contradict Mary's belief.
 *
 * A person contradicts Mary's belief if one of the following statements is
 * true:
 *   - they are <code>young</code> and <code>beautiful</code> but not
 *     <code>loved</code>;
 *   - they are <code>loved</code> but not <code>young</code> or not
 *     <code>beautiful</code>.
 *
 * @param {boolean} young
 *
 * @param {boolean} beautiful
 *
 * @param {boolean} loved
 *
 * @returns {boolean}
 * <code>true</code> if the person contradicts Mary's belief, <code>false</code>
 * otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function willYou(young: boolean, beautiful: boolean, loved: boolean): boolean {
  return (young && beautiful) !== loved;
}

module.exports = willYou;

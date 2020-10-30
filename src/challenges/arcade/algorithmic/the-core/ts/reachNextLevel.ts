/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 9. Reach Next Level'.
 *
 * You are playing an RPG game. Currently your experience points (XP) total is
 * equal to <code>experience</code>. To reach the next level your XP should be
 * at least at <code>threshold</code>. If you kill the monster in front of you,
 * you will gain more experience points in the amount of the
 * <code>reward</code>.
 *
 * Given values <code>experience</code>, <code>threshold</code> and
 * <code>reward</code>, check if you reach the next level after killing the
 * monster.
 *
 * @param {number} experience
 * Integer.
 * Guaranteed constraints:
 * <code>3 ≤ experience ≤ 250</code>.
 *
 * @param {number} threshold
 * Integer.
 * Guaranteed constraints:
 * <code>5 ≤ threshold ≤ 300</code>.
 *
 * @param {number} reward
 * Integer.
 * Guaranteed constraints:
 * <code>2 ≤ reward ≤ 65</code>.
 *
 * @returns {boolean}
 * <code>true</code> if you reach the next level, <code>false</code> otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function reachNextLevel(
  experience: number,
  threshold: number,
  reward: number
): boolean {
  return experience + reward >= threshold;
}

module.exports = reachNextLevel;

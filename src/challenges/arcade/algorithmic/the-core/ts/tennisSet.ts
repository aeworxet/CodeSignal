/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 14. Tennis Set'.
 *
 * In tennis, the winner of a set is based on how many games each player wins.
 * The first player to win <code>6</code> games is declared the winner
 * <strong>unless</strong> their opponent had already won <code>5</code> games,
 * in which case the set continues until one of the players has won
 * <code>7</code> games.
 *
 * Given two integers <code>score1</code> and <code>score2</code>, your task is
 * to determine if it is possible for a tennis set to be finished with a final
 * score of <code>score1</code> : <code>score2</code>.
 *
 * @param {number} score1
 * Number of games won by the <code>1<sup>st</sup></code> player, non-negative
 * integer.
 * Guaranteed constraints:
 * <code>0 ≤ score1 ≤ 10</code>.
 *
 * @param {number} score2
 * Number of games won by the <code>2<sup>nd</sup></code> player, non-negative
 * integer.
 * Guaranteed constraints:
 * <code>0 ≤ score2 ≤ 10</code>.
 *
 * @returns {boolean}
 * <code>true</code> if <code>score1 : score2</code> represents a possible score
 * for an ended set, <code>false</code> otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function tennisSet(score1: number, score2: number): boolean {
  return (
    (score1 < 5 && score2 === 6) ||
    ((score1 === 5 || score1 === 6) && score2 === 7) ||
    (score2 < 5 && score1 === 6) ||
    ((score2 === 5 || score2 === 6) && score1 === 7)
  );
}

module.exports = tennisSet;

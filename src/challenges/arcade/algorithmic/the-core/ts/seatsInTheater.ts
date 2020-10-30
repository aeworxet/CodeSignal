/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 4. Seats in Theater'.
 *
 * Your friend advised you to see a new performance in the most popular theater
 * in the city. He knows a lot about art and his advice is usually good, but not
 * this time: the performance turned out to be awfully dull. It's so bad you
 * want to sneak out, which is quite simple, especially since the exit is
 * located right behind your row to the left. All you need to do is climb over
 * your seat and make your way to the exit.
 *
 * The main problem is your shyness: you're afraid that you'll end up blocking
 * the view (even if only for a couple of seconds) of all the people who sit
 * behind you and in your column or the columns to your left. To gain some
 * courage, you decide to calculate the number of such people and see if you can
 * possibly make it to the exit without disturbing too many people.
 *
 * Given the total number of rows and columns in the theater (<code>nRows</code>
 * and <code>nCols</code>, respectively), and the <code>row</code> and
 * <code>col</code> you're sitting in, return the number of people who sit
 * strictly behind you <strong>and</strong> in your column or to the left,
 * assuming all seats are occupied.
 *
 * Here is what the theater looks like:
 * <br />
 * <img src="../src/resources/arcade/algorithmic/the-core/seatsInTheater.png"
 * height=30% alt="Illustration picture for the task">
 *
 * @param {number} nCols
 * An integer, the number of theater's columns.
 * Guaranteed constraints:
 * <code>1 ≤ nCols ≤ 1000</code>.
 *
 * @param {number} nRows
 * An integer, the number of theater's rows.
 * Guaranteed constraints:
 * <code>1 ≤ nRows ≤ 1000</code>.
 *
 * @param {number} col
 * An integer, the column number of your own seat (1-based).
 * Guaranteed constraints:
 * <code>1 ≤ col ≤ nCols</code>.
 *
 * @param {number} row
 * An integer, the row number of your own seat (1-based).
 * Guaranteed constraints:
 * <code>1 ≤ row ≤ nRows</code>.
 *
 * @returns {number}
 * Integer. The number of people who sit strictly behind you
 * <strong>and</strong> in your column or to the left.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function seatsInTheater(
  nCols: number,
  nRows: number,
  col: number,
  row: number
): number {
  return (nCols - col + 1) * (nRows - row);
}

module.exports = seatsInTheater;

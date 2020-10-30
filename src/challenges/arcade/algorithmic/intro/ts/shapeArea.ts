/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 5. shapeArea'.
 *
 * Below we will define an <code>n</code>-interesting polygon. Your task is to
 * find the area of a polygon for a given <code>n</code>.
 *
 * A <code>1</code>-interesting polygon is just a square with a side of length
 * <code>1</code>. An <code>n</code>-interesting polygon is obtained by taking
 * the <code>n - 1</code>-interesting polygon and appending
 * <code>1</code>-interesting polygons to its rim, side by side. You can see the
 * <code>1</code>-, <code>2</code>-, <code>3</code>- and
 * <code>4</code>-interesting polygons in the picture below.
 * <br />
 * <img src="../src/resources/arcade/algorithmic/intro/shapeArea.png"
 * width=50% height=50% alt="Illustration picture for the task">
 *
 * @param {number} n
 * Integer.
 * Guaranteed constraints:
 * <code>1 ≤ n < 10<sup>4</sup></code>.
 *
 * @returns {number}
 * Integer. The area of the <code>n</code>-interesting polygon.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function shapeArea(n: number): number {
  return n * n + (n - 1) * (n - 1);
}

module.exports = shapeArea;

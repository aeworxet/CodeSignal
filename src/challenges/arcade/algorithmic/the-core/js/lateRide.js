'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 7. Late Ride'.
 *
 * One night you go for a ride on your motorcycle. At <code>00:00</code> you
 * start your engine, and the built-in timer automatically begins counting the
 * length of your ride, in minutes. Off you go to explore the neighborhood.
 *
 * When you finally decide to head back, you realize there's a chance the
 * bridges on your route home are up, leaving you stranded! Unfortunately, you
 * don't have your watch on you and don't know what time it is. All you know
 * thanks to the bike's timer is that <code>n</code> minutes have passed since
 * <code>00:00</code>.
 *
 * Using the bike's timer, calculate the current time. Return an answer as the
 * sum of digits that the digital timer in the format <code>hh:mm</code> would
 * show.
 *
 * @param {number} n
 * Integer. The duration of your ride, in minutes. It is guaranteed that you've
 * been riding for less than a day (24 hours).
 * Guaranteed constraints:
 * <code>0 ≤ n < 60 * 24</code>.
 *
 * @returns {number}
 * Integer. The sum of the digits the digital timer would show.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function lateRide(n) {
  const a = parseInt(n / 60, 10);
  const b = n - a * 60;
  const c = Array.from(a.toString().concat(b.toString())).map(Number);
  return c.reduce((a, b) => a + b);
}

module.exports = lateRide;

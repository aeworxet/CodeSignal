'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 6. makeArrayConsecutive2'.
 *
 * Ratiorg got <code>statues</code> of <em>different</em> sizes as a present
 * from CodeMaster for his birthday, each statue having an non-negative integer
 * size. Since he likes to make things perfect, he wants to arrange them from
 * smallest to largest so that each statue will be bigger than the previous one
 * exactly by <code>1</code>. He may need some additional statues to be able to
 * accomplish that. Help him figure out the minimum number of additional statues
 * needed.
 *
 * @param {number[]} statues
 * An array of <em>distinct</em> non-negative integers.
 * Guaranteed constraints:
 * <code>1 ≤ statues.length ≤ 10</code>,
 * <code>0 ≤ statues[i] ≤ 20</code>.
 *
 * @returns {number}
 * Integer. The minimal number of <code>statues</code> that need to be added to
 * existing statues such that it contains every integer size from an interval
 * <code>[L, R]</code> (for some <code>L, R</code>) and no other sizes.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function makeArrayConsecutive2(statues) {
  return Math.max(...statues) - Math.min(...statues) - statues.length + 1;
}

module.exports = makeArrayConsecutive2;

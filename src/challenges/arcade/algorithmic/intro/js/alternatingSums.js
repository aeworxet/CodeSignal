'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 14. alternatingSums'.
 *
 * Several people are standing in a row and need to be divided into two teams.
 * The first person goes into <em>team 1</em>, the second goes into <em>team
 * 2</em>, the third goes into <em>team 1</em> again, the fourth into <em>team
 * 2</em>, and so on.
 *
 * You are given an array of positive integers - the weights of the people.
 * Return an array of two integers, where the first element is the total weight
 * of <em>team 1</em>, and the second element is the total weight of <em>team
 * 2</em> after the division is complete.
 *
 * @param {number[]} a
 * Array of integers.
 * Guaranteed constraints:
 * <code>1 ≤ a.length ≤ 10<sup>5</sup></code>,
 * <code>45 ≤ a[i] ≤ 100</code>.
 *
 * @returns {number[]}
 * Array of integers.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function alternatingSums(a) {
  return [
    a.map((b, i) => (i % 2 === 0 ? b : 0)).reduce((acc, c) => acc + c),
    a.map((b, i) => (i % 2 === 1 ? b : 0)).reduce((acc, c) => acc + c),
  ];
}

module.exports = alternatingSums;

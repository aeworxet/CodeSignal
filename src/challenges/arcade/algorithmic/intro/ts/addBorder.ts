/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 15. addBorder'.
 *
 * Given a rectangular matrix of characters, function adds a border of
 * asterisks(<code>*</code>) to it.
 *
 * @param {string[]} picture
 * A non-empty array of non-empty equal-length strings.
 * Guaranteed constraints:
 * <code>1 ≤ picture.length ≤ 100</code>,
 * <code>1 ≤ picture[i].length ≤ 100</code>.
 *
 * @returns {string[]}
 * The same matrix of characters, framed with a border of asterisks of width
 * <code>1</code>.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function addBorder(picture: string[]): string[] {
  const a = picture[0].length;
  for (let i = 0; i < picture.length; i++) {
    picture[i] = '*' + picture[i] + '*';
  }
  picture.unshift('*'.repeat(a + 2));
  picture.push('*'.repeat(a + 2));
  return picture;
}

module.exports = addBorder;

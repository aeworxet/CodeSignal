'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Company Challenges, Jet, catalogUpdate'.
 *
 * <a href="https://jet.com">Jet.com</a> customers can easily find the item they
 * are looking for by browsing by category. Categories are stored in a catalog
 * that is updated on a regular basis as inventory changes. Your goal is to
 * implement an algorithm that updates the catalog with new items.
 *
 * The <code>catalog</code> is given as a two-dimensional array. For each
 * <code>i</code>, <code>catalog[i][0]</code> represents the name of the
 * corresponding category, and <code>catalog[i][j]</code> for <code>j > 0</code>
 * is the name of some item within this category, which can also be the category
 * of some other items. For each <code>i</code> all elements of
 * <code>catalog[i]</code> except the first are sorted lexicographically, and
 * <code>catalog</code> arrays are sorted <em>lexicographically</em> by their
 * first elements. The name of the topmost directory is <code>"root"</code>.
 *
 * Given a list of <code>updates</code>, update the <code>catalog</code> with
 * the new items and return the result.
 *
 * @param {Array<Array<string>>} catalog
 * The initial catalog in the format described above. It is guaranteed that the
 * catalog is correct, i.e. there are no duplicate elements,
 * <code>category[i][0] = "root"</code> for some <code>i</code>, and for each
 * <code>t ≠ i</code> <code>category[t][0]</code> is equal to exactly one
 * <code>category[j][k]</code>, where <code>j ≠ t</code> and <code>k > 0</code>.
 * Guaranteed constraints:
 * <code>1 ≤ catalog.length ≤ 10</code>,
 * <code>2 ≤ catalog[i].length ≤ 5</code>,
 * <code>1 ≤ catalog[i][j].length ≤ 45</code>.
 *
 * @param {Array<Array<string>>} updates
 * Array of updates. Each update is a two-element array in the format
 * <code>[<parent_category>, <item_name>]</code>, where
 * <code><parent_category></code> is the name of the category the item belongs
 * to, and <code><item_name></code> is the item name. The elements of
 * <code>update</code> should be considered in the order they are given. It is
 * guaranteed that <code><parent_category></code> is always present in the
 * catalog at the time the corresponding update is made.
 * Guaranteed constraints:
 * <code>0 ≤ updates.length ≤ 15</code>,
 * <code>2 ≤ updates[i].length ≤ 2</code>,
 * <code>3 ≤ updates[i][j].length ≤ 24</code>.
 *
 * @returns {Array<Array<string>>}
 * The updated catalog, formatted as it is initially given. The elements should
 * be sorted as described above, and all elements of the resulting array should
 * contain at least two elements each.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function catalogUpdate(catalog, updates) {
  for (let i = 0; i < updates.length; i++) {
    for (let j = 0; j < catalog.length; j++) {
      /* Find first element in 'catalog' array which corresponds to one of first
      elements in the 'updates' array. */
      if (updates[i][0] === catalog[j][0]) {
        /* Get first element already known as common for both 'catalog' and
        'updates' arrays, and make sure it's casted to type 'string'. */
        const firstElement = String(catalog[j].slice(0, 1));
        /* All further array methods in this block are mutating. */
        /* Remove first element from 'catalog' array. */
        catalog[j].splice(0, 1);
        /* Remove first element from 'updates' array. */
        updates[i].splice(0, 1);
        /* Push mutated 'updates' array to mutated 'catalog' array. */
        catalog[j].push(...updates[i]);
        /* Sort elements of 'catalog' array in alphabetical order. */
        catalog[j].sort();
        /* Push first element of 'catalog' array back into it. */
        catalog[j].unshift(firstElement);
        /* Set current element of the 'updates' array to be empty, so it does
        not interfere with further checks. */
        updates[i] = [];
      }
    }
    /* If current element of the 'updates' array is not set to an empty array,
    then there was no correspondence for it during upper check, and it can be
    safely pushed to 'catalog' array as is. */
    if (updates[i].length) {
      catalog.push(updates[i]);
    }
  }
  /* Final sort of the resulting 'catalog' array by first elements, setting them
  in alphabetical order. */
  catalog.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    return -1;
  });
  for (let j = 0; j < catalog.length; j++) {
    /* Check that each element of the resulting 'catalog' array contains at
    least two nested elements, before returning it. */
    if (catalog[j].length === 1) {
      throw new Error(
        "Element without nested elements was found in the resulting \
'catalog' array \n↓" +
          `\n${'-'.repeat(catalog[j][0].length)}\n` +
          catalog[j] +
          `\n${'-'.repeat(catalog[j][0].length)}\n`
      );
    }
  }
  return catalog;
}

module.exports = catalogUpdate;

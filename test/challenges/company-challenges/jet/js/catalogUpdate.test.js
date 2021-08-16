'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Company Challenges, Jet, catalogUpdate'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const catalogUpdate = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));

describe('Test 1', () => {
  it(`For
    catalogUpdate(
      [
        ['Books', 'Classics', 'Fiction'],
        ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
        ['Grocery', 'Beverages', 'Snacks'],
        ['Snacks', 'Chocolate', 'Sweets'],
        ['root', 'Books', 'Electronics', 'Grocery'],
      ],
      [
        ['Snacks', 'Marmalade'],
        ['Fiction', 'Harry Potter'],
        ['root', 'T-shirts'],
        ['T-shirts', 'CodeSignal'],
      ]
    ), the output should be
      [
        ['Books', 'Classics', 'Fiction'],
        ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
        ['Fiction', 'Harry Potter'],
        ['Grocery', 'Beverages', 'Snacks'],
        ['Snacks', 'Chocolate', 'Marmalade', 'Sweets'],
        ['T-shirts', 'CodeSignal'],
        ['root', 'Books', 'Electronics', 'Grocery', 'T-shirts'],
      ]`, () => {
    expect(
      catalogUpdate(
        [
          ['Books', 'Classics', 'Fiction'],
          ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
          ['Grocery', 'Beverages', 'Snacks'],
          ['Snacks', 'Chocolate', 'Sweets'],
          ['root', 'Books', 'Electronics', 'Grocery'],
        ],
        [
          ['Snacks', 'Marmalade'],
          ['Fiction', 'Harry Potter'],
          ['root', 'T-shirts'],
          ['T-shirts', 'CodeSignal'],
        ]
      )
    ).toStrictEqual([
      ['Books', 'Classics', 'Fiction'],
      ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
      ['Fiction', 'Harry Potter'],
      ['Grocery', 'Beverages', 'Snacks'],
      ['Snacks', 'Chocolate', 'Marmalade', 'Sweets'],
      ['T-shirts', 'CodeSignal'],
      ['root', 'Books', 'Electronics', 'Grocery', 'T-shirts'],
    ]);
  });
});
describe('Test 2', () => {
  it(`For
    catalogUpdate(
      [
        ['Books', 'Classics', 'Fiction '],
        ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
        ['Grocery', 'Beverages', 'Snacks'],
        ['Snacks', 'Chocolate', 'Sweets'],
        ['root', 'Books', 'Electronics', 'Grocery'],
      ],
      [
        ['Snacks', 'Marmalade'],
        ['Fiction ', 'The Chronicles of Narnia'],
        ['Fiction ', 'Fiction stories'],
        ['Snacks', 'Tuc'],
        ['root', 'T-shirts-men'],
        ['T-shirts-men', 'My little pony t-shirt'],
        ['Fiction ', 'Harry Potter'],
        ['root', 'T-shirts'],
        ['T-shirts', 'CodeSignal'],
        ['Fiction stories', 'Frozen heart'],
        ['Fiction stories', 'Marvel films'],
        ['Marvel films', 'Ant-man'],
        ['Marvel films', 'Avengers'],
      ]
    ), the output should be
      [
        ['Books', 'Classics', 'Fiction '],
        ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
        [
          'Fiction ',
          'Fiction stories',
          'Harry Potter',
          'The Chronicles of Narnia',
        ],
        ['Fiction stories', 'Frozen heart', 'Marvel films'],
        ['Grocery', 'Beverages', 'Snacks'],
        ['Marvel films', 'Ant-man', 'Avengers'],
        ['Snacks', 'Chocolate', 'Marmalade', 'Sweets', 'Tuc'],
        ['T-shirts', 'CodeSignal'],
        ['T-shirts-men', 'My little pony t-shirt'],
        ['root', 'Books', 'Electronics', 'Grocery', 'T-shirts', 'T-shirts-men'],
      ]`, () => {
    expect(
      catalogUpdate(
        [
          ['Books', 'Classics', 'Fiction '],
          ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
          ['Grocery', 'Beverages', 'Snacks'],
          ['Snacks', 'Chocolate', 'Sweets'],
          ['root', 'Books', 'Electronics', 'Grocery'],
        ],
        [
          ['Snacks', 'Marmalade'],
          ['Fiction ', 'The Chronicles of Narnia'],
          ['Fiction ', 'Fiction stories'],
          ['Snacks', 'Tuc'],
          ['root', 'T-shirts-men'],
          ['T-shirts-men', 'My little pony t-shirt'],
          ['Fiction ', 'Harry Potter'],
          ['root', 'T-shirts'],
          ['T-shirts', 'CodeSignal'],
          ['Fiction stories', 'Frozen heart'],
          ['Fiction stories', 'Marvel films'],
          ['Marvel films', 'Ant-man'],
          ['Marvel films', 'Avengers'],
        ]
      )
    ).toStrictEqual([
      ['Books', 'Classics', 'Fiction '],
      ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
      [
        'Fiction ',
        'Fiction stories',
        'Harry Potter',
        'The Chronicles of Narnia',
      ],
      ['Fiction stories', 'Frozen heart', 'Marvel films'],
      ['Grocery', 'Beverages', 'Snacks'],
      ['Marvel films', 'Ant-man', 'Avengers'],
      ['Snacks', 'Chocolate', 'Marmalade', 'Sweets', 'Tuc'],
      ['T-shirts', 'CodeSignal'],
      ['T-shirts-men', 'My little pony t-shirt'],
      ['root', 'Books', 'Electronics', 'Grocery', 'T-shirts', 'T-shirts-men'],
    ]);
  });
});
describe('Test 3', () => {
  it(`For
    catalogUpdate(
      [
        ['Books', 'Classics', 'Fiction '],
        ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
        ['Grocery', 'Beverages', 'Snacks'],
        ['Snacks', 'Chocolate', 'Sweets'],
        ['root', 'Books', 'Electronics', 'Grocery'],
      ],
      [
        ['Snacks', 'Marmalade'],
        ['Fiction ', 'The Chronicles of Narnia'],
        ['Fiction ', 'Fiction stories'],
        ['Snacks', 'Tuc'],
        ['root', 'T-shirts-men'],
        ['T-shirts-men', 'My little pony t-shirt'],
        ['Fiction ', 'Harry Potter'],
        ['root', 'T-shirts'],
        ['T-shirts', 'CodeSignal'],
        ['Fiction stories', 'Frozen heart'],
        ['Fiction stories', 'Marvel films'],
        ['Marvel films', 'Ant-man'],
        ['Marvel films', 'Avengers'],
      ]
    ), the output should be
      [
        ['Books', 'Classics', 'Fiction '],
        ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
        [
          'Fiction ',
          'Fiction stories',
          'Harry Potter',
          'The Chronicles of Narnia',
        ],
        ['Fiction stories', 'Frozen heart', 'Marvel films'],
        ['Grocery', 'Beverages', 'Snacks'],
        ['Marvel films', 'Ant-man', 'Avengers'],
        ['Snacks', 'Chocolate', 'Marmalade', 'Sweets', 'Tuc'],
        ['T-shirts', 'CodeSignal'],
        ['T-shirts-men', 'My little pony t-shirt'],
        ['root', 'Books', 'Electronics', 'Grocery', 'T-shirts', 'T-shirts-men'],
      ]`, () => {
    expect(
      catalogUpdate(
        [['root', 'All', 'Fiction', 'here', 'topics']],
        [
          ['root', 'and'],
          ['root', 'Fiction stories'],
          ['Fiction stories', 'The Chronicles of Narnia'],
          ['root', 'T-shirts-men'],
          ['root', 'words'],
          ['T-shirts-men', 'My little pony t-shirt'],
          ['T-shirts-men', 'T-shirts'],
          ['Fiction', 'Harry Potter'],
          ['root', 'and good T-shirts'],
          ['T-shirts', 'CodeSignal'],
        ]
      )
    ).toStrictEqual([
      ['Fiction', 'Harry Potter'],
      ['Fiction stories', 'The Chronicles of Narnia'],
      ['T-shirts', 'CodeSignal'],
      ['T-shirts-men', 'My little pony t-shirt', 'T-shirts'],
      [
        'root',
        'All',
        'Fiction',
        'Fiction stories',
        'T-shirts-men',
        'and',
        'and good T-shirts',
        'here',
        'topics',
        'words',
      ],
    ]);
  });
});
describe('Test 4', () => {
  it(`For catalogUpdate(['root', 'All']], []), the output should be
    [['root', 'All']]`, () => {
    expect(catalogUpdate([['root', 'All']], [])).toStrictEqual([
      ['root', 'All'],
    ]);
  });
});
describe('Test 5', () => {
  it(`For
    catalogUpdate(
      [
        ['Books', 'Classics', 'Fiction'],
        ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
        ['Grocery', 'Beverages', 'Snacks'],
        ['Snacks', 'Chocolate', 'Sweets'],
        ['root', 'Books', 'Electronics', 'Grocery'],
      ],
      [
        ['Snacks', 'Marmalade'],
        ['Fiction', 'Harry Potter'],
        ['root', 'T-shirts'],
        ['T-shirts'],
      ]
    ), the exception "Error in format of the resulting 'catalog' array" should
    be thrown`, () => {
    expect(() => {
      catalogUpdate(
        [
          ['Books', 'Classics', 'Fiction'],
          ['Electronics', 'Cell Phones', 'Computers', 'Ultimate item'],
          ['Grocery', 'Beverages', 'Snacks'],
          ['Snacks', 'Chocolate', 'Sweets'],
          ['root', 'Books', 'Electronics', 'Grocery'],
        ],
        [
          ['Snacks', 'Marmalade'],
          ['Fiction', 'Harry Potter'],
          ['root', 'T-shirts'],
          ['T-shirts'],
        ]
      );
    }).toThrow(
      /Element without nested elements was found in the resulting 'catalog' array/
    );
  });
});

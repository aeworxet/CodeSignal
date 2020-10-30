/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 12. sortByHeight'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const sortByHeight = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]), the output should be [-1, 150, 160, 170, -1, -1, 180, 190]', () => {
    expect(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])).toStrictEqual([
      -1, 150, 160, 170, -1, -1, 180, 190,
    ]);
  });
});
describe('Test 2', () => {
  it('For sortByHeight([-1, -1, -1, -1, -1]), the output should be [-1, -1, -1, -1, -1]', () => {
    expect(sortByHeight([-1, -1, -1, -1, -1])).toStrictEqual([
      -1, -1, -1, -1, -1,
    ]);
  });
});
describe('Test 3', () => {
  it('For sortByHeight([-1]), the output should be [-1]', () => {
    expect(sortByHeight([-1])).toStrictEqual([-1]);
  });
});
describe('Test 4', () => {
  it('For sortByHeight([4, 2, 9, 11, 2, 16]), the output should be [2, 2, 4, 9, 11, 16]', () => {
    expect(sortByHeight([4, 2, 9, 11, 2, 16])).toStrictEqual([
      2, 2, 4, 9, 11, 16,
    ]);
  });
});
describe('Test 5', () => {
  it('For sortByHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]), the output should be [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]', () => {
    expect(
      sortByHeight([2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1])
    ).toStrictEqual([1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]);
  });
});
describe('Test 6', () => {
  it('For sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]), the output should be [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]', () => {
    expect(
      sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])
    ).toStrictEqual([1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]);
  });
});

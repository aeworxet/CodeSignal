'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 16. Metro Card'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const metroCard = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));

describe('Test 1', () => {
  it('For metroCard(30), the output should be [31]', () => {
    expect(metroCard(30)).toStrictEqual([31]);
  });
});
describe('Test 2', () => {
  it('For metroCard(31), the output should be [28, 30, 31]', () => {
    expect(metroCard(31)).toStrictEqual([28, 30, 31]);
  });
});

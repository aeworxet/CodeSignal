/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 14. alternatingSums'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const alternatingSums = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For alternatingSums([50, 60, 60, 45, 70]), the output should be [180, 105]', () => {
    expect(alternatingSums([50, 60, 60, 45, 70])).toStrictEqual([180, 105]);
  });
});
describe('Test 2', () => {
  it('For alternatingSums([100, 50]), the output should be [100, 50]', () => {
    expect(alternatingSums([100, 50])).toStrictEqual([100, 50]);
  });
});
describe('Test 3', () => {
  it('For alternatingSums([80]), the output should be [80, 0]', () => {
    expect(alternatingSums([80])).toStrictEqual([80, 0]);
  });
});
describe('Test 4', () => {
  it('For alternatingSums([100, 50, 50, 100]), the output should be [150, 150]', () => {
    expect(alternatingSums([100, 50, 50, 100])).toStrictEqual([150, 150]);
  });
});
describe('Test 5', () => {
  it('For alternatingSums([100, 51, 50, 100]), the output should be [150, 151]', () => {
    expect(alternatingSums([100, 51, 50, 100])).toStrictEqual([150, 151]);
  });
});

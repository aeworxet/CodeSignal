'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 2. centuryFromYear'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const centuryFromYear = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));

describe('Test 1', () => {
  it('For centuryFromYear(1905), the output should be 20', () => {
    expect(centuryFromYear(1905)).toBe(20);
  });
});
describe('Test 2', () => {
  it('For centuryFromYear(1700), the output should be 17', () => {
    expect(centuryFromYear(1700)).toBe(17);
  });
});
describe('Test 3', () => {
  it('For centuryFromYear(1988), the output should be 20', () => {
    expect(centuryFromYear(1988)).toBe(20);
  });
});
describe('Test 4', () => {
  it('For centuryFromYear(2000), the output should be 20', () => {
    expect(centuryFromYear(2000)).toBe(20);
  });
});
describe('Test 5', () => {
  it('For centuryFromYear(2001), the output should be 21', () => {
    expect(centuryFromYear(2001)).toBe(21);
  });
});
describe('Test 6', () => {
  it('For centuryFromYear(200), the output should be 2', () => {
    expect(centuryFromYear(200)).toBe(2);
  });
});
describe('Test 7', () => {
  it('For centuryFromYear(374), the output should be 4', () => {
    expect(centuryFromYear(374)).toBe(4);
  });
});
describe('Test 8', () => {
  it('For centuryFromYear(45), the output should be 1', () => {
    expect(centuryFromYear(45)).toBe(1);
  });
});
describe('Test 9', () => {
  it('For centuryFromYear(8), the output should be 1', () => {
    expect(centuryFromYear(8)).toBe(1);
  });
});

'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 5. shapeArea'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const shapeArea = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));

describe('Test 1', () => {
  it('For shapeArea(2), the output should be 5', () => {
    expect(shapeArea(2)).toBe(5);
  });
});
describe('Test 2', () => {
  it('For shapeArea(3), the output should be 13', () => {
    expect(shapeArea(3)).toBe(13);
  });
});
describe('Test 3', () => {
  it('For shapeArea(1), the output should be 1', () => {
    expect(shapeArea(1)).toBe(1);
  });
});
describe('Test 4', () => {
  it('For shapeArea(5), the output should be 41', () => {
    expect(shapeArea(5)).toBe(41);
  });
});
describe('Test 5', () => {
  it('For shapeArea(7000), the output should be 97986001', () => {
    expect(shapeArea(7000)).toBe(97986001);
  });
});
describe('Test 6', () => {
  it('For shapeArea(8000), the output should be 127984001', () => {
    expect(shapeArea(8000)).toBe(127984001);
  });
});
describe('Test 7', () => {
  it('For shapeArea(9999), the output should be 199940005', () => {
    expect(shapeArea(9999)).toBe(199940005);
  });
});
describe('Test 8', () => {
  it('For shapeArea(9998), the output should be 199900013', () => {
    expect(shapeArea(9998)).toBe(199900013);
  });
});
describe('Test 9', () => {
  it('For shapeArea(8999), the output should be 161946005', () => {
    expect(shapeArea(8999)).toBe(161946005);
  });
});
describe('Test 10', () => {
  it('For shapeArea(100), the output should be 19801', () => {
    expect(shapeArea(100)).toBe(19801);
  });
});

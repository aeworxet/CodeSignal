/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 5. Max Multiple'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const maxMultiple = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));

describe('Test 1', () => {
  it('maxMultiple(3, 10), the output should be 9', () => {
    expect(maxMultiple(3, 10)).toBe(9);
  });
});
describe('Test 2', () => {
  it('maxMultiple(2, 7), the output should be 6', () => {
    expect(maxMultiple(2, 7)).toBe(6);
  });
});
describe('Test 3', () => {
  it('maxMultiple(10, 50), the output should be 50', () => {
    expect(maxMultiple(10, 50)).toBe(50);
  });
});
describe('Test 4', () => {
  it('maxMultiple(7, 100), the output should be 98', () => {
    expect(maxMultiple(7, 100)).toBe(98);
  });
});
describe('Test 5', () => {
  it('maxMultiple(7, 20), the output should be 14', () => {
    expect(maxMultiple(7, 20)).toBe(14);
  });
});
describe('Test 6', () => {
  it('maxMultiple(5, 13), the output should be 10', () => {
    expect(maxMultiple(5, 13)).toBe(10);
  });
});
describe('Test 7', () => {
  it('maxMultiple(8, 88), the output should be 88', () => {
    expect(maxMultiple(8, 88)).toBe(88);
  });
});
describe('Test 8', () => {
  it('maxMultiple(10, 100), the output should be 100', () => {
    expect(maxMultiple(10, 100)).toBe(100);
  });
});
describe('Test 9', () => {
  it('maxMultiple(2, 5), the output should be 4', () => {
    expect(maxMultiple(2, 5)).toBe(4);
  });
});
describe('Test 10', () => {
  it('maxMultiple(3, 5), the output should be 3', () => {
    expect(maxMultiple(3, 5)).toBe(3);
  });
});
describe('Test 11', () => {
  it('maxMultiple(9, 11), the output should be 9', () => {
    expect(maxMultiple(9, 11)).toBe(9);
  });
});
describe('Test 12', () => {
  it('maxMultiple(8, 15), the output should be 8', () => {
    expect(maxMultiple(8, 15)).toBe(8);
  });
});
describe('Test 13', () => {
  it('maxMultiple(9, 60), the output should be 54', () => {
    expect(maxMultiple(9, 60)).toBe(54);
  });
});

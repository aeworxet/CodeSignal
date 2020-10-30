'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 7. almostIncreasingSequence'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const almostIncreasingSequence = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For almostIncreasingSequence([1, 3, 2, 1]), the output should be false', () => {
    expect(almostIncreasingSequence([1, 3, 2, 1])).toBe(false);
  });
});
describe('Test 2', () => {
  it('For almostIncreasingSequence([1, 3, 2]), the output should be true', () => {
    expect(almostIncreasingSequence([1, 3, 2])).toBe(true);
  });
});
describe('Test 3', () => {
  it('For almostIncreasingSequence([1, 2, 1, 2]), the output should be false', () => {
    expect(almostIncreasingSequence([1, 2, 1, 2])).toBe(false);
  });
});
describe('Test 4', () => {
  it('For almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15]), the output should be false', () => {
    expect(almostIncreasingSequence([3, 6, 5, 8, 10, 20, 15])).toBe(false);
  });
});
describe('Test 5', () => {
  it('For almostIncreasingSequence([1, 1, 2, 3, 4, 4]), the output should be false', () => {
    expect(almostIncreasingSequence([1, 1, 2, 3, 4, 4])).toBe(false);
  });
});
describe('Test 6', () => {
  it('For almostIncreasingSequence([1, 4, 10, 4, 2]), the output should be false', () => {
    expect(almostIncreasingSequence([1, 4, 10, 4, 2])).toBe(false);
  });
});
describe('Test 7', () => {
  it('For almostIncreasingSequence([10, 1, 2, 3, 4, 5]), the output should be true', () => {
    expect(almostIncreasingSequence([10, 1, 2, 3, 4, 5])).toBe(true);
  });
});
describe('Test 8', () => {
  it('For almostIncreasingSequence([1, 1, 1, 2, 3]), the output should be false', () => {
    expect(almostIncreasingSequence([1, 1, 1, 2, 3])).toBe(false);
  });
});
describe('Test 9', () => {
  it('For almostIncreasingSequence([0, -2, 5, 6]), the output should be true', () => {
    expect(almostIncreasingSequence([0, -2, 5, 6])).toBe(true);
  });
});
describe('Test 10', () => {
  it('For almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6]), the output should be false', () => {
    expect(almostIncreasingSequence([1, 2, 3, 4, 5, 3, 5, 6])).toBe(false);
  });
});
describe('Test 11', () => {
  it('For almostIncreasingSequence([40, 50, 60, 10, 20, 30]), the output should be false', () => {
    expect(almostIncreasingSequence([40, 50, 60, 10, 20, 30])).toBe(false);
  });
});
describe('Test 12', () => {
  it('For almostIncreasingSequence([1, 1]), the output should be true', () => {
    expect(almostIncreasingSequence([1, 1])).toBe(true);
  });
});
describe('Test 13', () => {
  it('For almostIncreasingSequence([1, 2, 5, 3, 5]), the output should be true', () => {
    expect(almostIncreasingSequence([1, 2, 5, 3, 5])).toBe(true);
  });
});
describe('Test 14', () => {
  it('For almostIncreasingSequence([1, 2, 5, 5, 5]), the output should be false', () => {
    expect(almostIncreasingSequence([1, 2, 5, 5, 5])).toBe(false);
  });
});
describe('Test 15', () => {
  it('For almostIncreasingSequence([10, 1, 2, 3, 4, 5, 6, 1]), the output should be false', () => {
    expect(almostIncreasingSequence([10, 1, 2, 3, 4, 5, 6, 1])).toBe(false);
  });
});
describe('Test 16', () => {
  it('For almostIncreasingSequence([1, 2, 3, 4, 3, 6]), the output should be true', () => {
    expect(almostIncreasingSequence([1, 2, 3, 4, 3, 6])).toBe(true);
  });
});
describe('Test 17', () => {
  it('For almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6]), the output should be true', () => {
    expect(almostIncreasingSequence([1, 2, 3, 4, 99, 5, 6])).toBe(true);
  });
});
describe('Test 18', () => {
  it('For almostIncreasingSequence([123, -17, -5, 1, 2, 3, 12, 43, 45]), the output should be true', () => {
    expect(almostIncreasingSequence([123, -17, -5, 1, 2, 3, 12, 43, 45])).toBe(true); // prettier-ignore
  });
});
describe('Test 19', () => {
  it('For almostIncreasingSequence([3, 5, 67, 98, 3]), the output should be true', () => {
    expect(almostIncreasingSequence([3, 5, 67, 98, 3])).toBe(true);
  });
});

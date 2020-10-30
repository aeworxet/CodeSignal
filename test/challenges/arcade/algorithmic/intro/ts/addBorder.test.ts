/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 15. addBorder'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const addBorder = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.ts', '.ts'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it(`For addBorder(
      ["abc",
       "ded"]
    ), the output should be
     ["*****",
      "*abc*",
      "*ded*",
      "*****"]`, () => {
    expect(addBorder(['abc', 'ded'])).toStrictEqual([
      '*****',
      '*abc*',
      '*ded*',
      '*****',
    ]);
  });
});
describe('Test 2', () => {
  it(`For addBorder(
      ["a"]
    ), the output should be
     ["***", 
      "*a*", 
      "***"]`, () => {
    expect(addBorder(['a'])).toStrictEqual(['***', '*a*', '***']);
  });
});
describe('Test 3', () => {
  it(`For addBorder(
      ["aa", 
       "**", 
       "zz"]
    ), the output should be
     ["****", 
      "*aa*", 
      "****", 
      "*zz*", 
      "****"]`, () => {
    expect(addBorder(['aa', '**', 'zz'])).toStrictEqual([
      '****',
      '*aa*',
      '****',
      '*zz*',
      '****',
    ]);
  });
});
describe('Test 4', () => {
  it(`For addBorder(
      ["abcde", 
       "fghij", 
       "klmno", 
       "pqrst", 
       "uvwxy"]
    ), the output should be
     ["*******", 
      "*abcde*", 
      "*fghij*", 
      "*klmno*", 
      "*pqrst*", 
      "*uvwxy*", 
      "*******"]`, () => {
    expect(
      addBorder(['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy'])
    ).toStrictEqual([
      '*******',
      '*abcde*',
      '*fghij*',
      '*klmno*',
      '*pqrst*',
      '*uvwxy*',
      '*******',
    ]);
  });
});
describe('Test 5', () => {
  it(`For addBorder(
      ["wzy**"]
    ), the output should be
     ["*******", 
      "*wzy***", 
      "*******"]`, () => {
    expect(addBorder(['wzy**'])).toStrictEqual([
      '*******',
      '*wzy***',
      '*******',
    ]);
  });
});

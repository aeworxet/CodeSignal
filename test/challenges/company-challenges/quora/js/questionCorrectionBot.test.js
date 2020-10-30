'use strict';
/**
 * Jest test for
 * Solution to a challenge
 * 'CodeSignal, Company Challenges, Quora, questionCorrectionBot'.
 */

import { describe, expect, it } from '@jest/globals';
import * as basePath from 'app-root-path';
const questionCorrectionBot = require(__filename
  .replace(basePath.resolve('test'), basePath.resolve('src'))
  .replace('.test.js', '.js'));
/* eslint-disable max-len */
describe('Test 1', () => {
  it('For " this  isn\'t   a     relevant question , is it??? " should be "This isn\'t a relevant question, is it?"', () => {
    expect(
      questionCorrectionBot(
        ' this  isn\'t   a     relevant question , is it??? '
      )
    ).toBe('This isn\'t a relevant question, is it?');
  });
});
describe('Test 2', () => {
  it('For "Is this answer correct?" should be "Is this answer correct?"', () => {
    expect(questionCorrectionBot('Is this answer correct?')).toBe(
      'Is this answer correct?'
    );
  });
});
describe('Test 3', () => {
  it('For "  Is,it    correct    ,    question" should be "Is, it correct, question?"', () => {
    expect(
      questionCorrectionBot(
        '  Is,it    correct    ,    question'
      )
    ).toBe('Is, it correct, question?');
  });
});
describe('Test 4', () => {
  it('For "                                      s." should be "S.?"', () => {
    expect(questionCorrectionBot('                                      s.')).toBe(
      'S.?'
    );
  });
});
describe('Test 5', () => {
  it('For "z?" should be "Z?"', () => {
    expect(
      questionCorrectionBot(
        'z?'
      )
    ).toBe('Z?');
  });
});
describe('Test 6', () => {
  it('For "z" should be "Z?"', () => {
    expect(questionCorrectionBot('z')).toBe(
      'Z?'
    );
  });
});
describe('Test 7', () => {
  it('For "questionword ,anotherquestionword," should be "Questionword, anotherquestionword, ?"', () => {
    expect(
      questionCorrectionBot(
        'questionword ,anotherquestionword,'
      )
    ).toBe('Questionword, anotherquestionword, ?');
  });
});
describe('Test 8', () => {
  it('For "where is F.A.Q.?" should be "Where is F.A.Q.?"', () => {
    expect(questionCorrectionBot('where is F.A.Q.?')).toBe(
      'Where is F.A.Q.?'
    );
  });
});
describe('Test 9', () => {
  it('For "a,b,c,d,e " should be "A, b, c, d, e?"', () => {
    expect(
      questionCorrectionBot(
        'a,b,c,d,e '
      )
    ).toBe('A, b, c, d, e?');
  });
});

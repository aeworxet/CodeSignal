/**
 * Solution to a challenge
 * 'CodeSignal, Company Challenges, Quora, questionCorrectionBot'.
 *
 * When a user asks a question on Quora, the system automatically tries to
 * improve the question's formatting before showing it to more users. Given a
 * question as an input string, perform formatting corrections according to the
 * following rules:
 * - Strip excessive whitespaces:
 *   - Remove whitespaces at the start and end, as well as multiple spaces in a
 *     row
 * - Fix spacing around punctuation:
 *   - Each comma should have a trailing space, but no space preceding it
 * - Questions should start with a capital letter
 * - Questions should end with a single question mark (not 0 or more than one).
 *
 * @param {string} question
 * It is guaranteed that the input string contains at least one non-whitespace
 * character, and the first of these characters is a letter (possibly
 * lowercase).
 * Guaranteed constraints:
 * <code>question.length ≤ 100</code>.
 *
 * @returns {string}
 * Corrected version of the question.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/aeworxet|CodeSignal}
 * {@link https://github.com/aeworxet|GitHub}
 */

function questionCorrectionBot(question: string): string {
  /* Trim whitespaces from both sides of the question. */
  question = question.trim();
  /* Make first letter of the question capitalized. */
  question = question[0].toUpperCase() + question.slice(1);
  /* If last letter of the question is not a question mark - add it. */
  if (!question.endsWith('?')) {
    question = question + '?';
  }
  /* If, on the contrary, question ends with multiple question marks, delete
  /* last '?' and continue deleting until there is only one left. */
  while (
    question[question.length - 1] === '?' &&
    question[question.length - 2] === '?'
  ) {
    question = question.substring(0, question.length - 1);
  }
  /* Split the question sentence into array of elements on empty whitespaces,
  /* simultaneously removing them. */
  const questionAsArr: string[] = question.split(/\s/).filter((item) => item);
  /* Check each array element for the need of insertion of additional whitespace
  /* ('for' loop with uncached array length was chosen intentionally, because of
  /* being faster than the array iterator 'forEach'). */
  for (let i = 0; i < questionAsArr.length; i++) {
    /* Additionally split each array element to separate characters and insert
    /* whitespace after comma. */
    const questionAsArrElem: string[] = questionAsArr[i].split('');
    /* But don't do anything if element currently being checked consists of only
    /* one char, because it might be a ',' itself or a one letter word, and
    /* +1'th element in this case will be 'undefined'. */
    if (questionAsArrElem.length !== 1) {
      for (let k = 0; k < questionAsArrElem.length; k++) {
        if (questionAsArrElem[k] === ',' && questionAsArrElem[k + 1] !== ' ') {
          questionAsArrElem.splice(k + 1, 0, ' ');
          k += 1;
        }
      }
    }
    /* Join result of additional checking back into one array element. */
    questionAsArr[i] = questionAsArrElem.join('');
    /* Continue checking: if the next array element is not 'undefined' (which
    /* would mean it simply does not exist), doesn't start with a comma (which
    /* would mean it is just an another improperly written word), is not a comma
    /* itself, and it doesn't end with a question mark (which would mean it is
    /* the last word in the question's sentence) - add an empty whitespace at
    /* the end of the array element, which is currently being checked. */
    if (
      questionAsArr[i + 1] !== undefined &&
      !questionAsArr[i + 1].startsWith(',') &&
      questionAsArr[i + 1] !== ',' &&
      !questionAsArr[i].endsWith('?')
    ) {
      questionAsArr[i] = questionAsArr[i] + ' ';
    }
  }
  /* Join result of all transformations into one string and return it. */
  question = questionAsArr.join('');

  return question;
}

module.exports = questionCorrectionBot;

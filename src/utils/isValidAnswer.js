/* eslint-disable no-restricted-globals */
import moment from 'moment';

/**
 * Validates answer for given question checking if it's required and
 * if the correct value type was provided
 * @param {*} answer Value to use as answer
 * @param {*} question Question object that contains the checks we need to apply
 */
const isValidAnswer = (answer, question) => {
  if (question.required && !answer) return false;
  if (question.type === 'number' && isNaN(answer)) return false;
  if (question.type === 'date' && !moment(answer).isValid()) return false;

  return true;
};

export default isValidAnswer;

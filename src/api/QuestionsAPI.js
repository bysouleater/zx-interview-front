import Axios from 'axios';

const BASE_URL = 'http://....';

/**
 * Calls backend service to retrieve the corresponding questions
 */
const getQuestions = async () => Axios.get(`${BASE_URL}/questions`);

/**
 * Calls backend service to save the given user's answers
 * @param {*} questions Array of questions that contain the provided answers
 */
const saveAnswers = async (questions) => Axios.post(`${BASE_URL}/answers`, questions.map(({ id, answer }) => ({ id, answer })));

export default {
  getQuestions,
  saveAnswers,
};

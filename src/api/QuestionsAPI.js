import Axios from 'axios';

const BASE_URL = 'http://....';

/**
 * Calls backend service to retrieve the corresponding questions
 */
// const getQuestions = async () => Axios.get(`${BASE_URL}/questions`);
const getQuestions = () => ({
  data: {
    questions: [
      {
        id: '1',
        question: 'Write a lambda function to fetch data from a DynamoDB and a relational DB. Upload your code in your GitHub account and share URL of the repository to validate the code. Try to use dynamic configurations and using Serverless framework is mandatory.',
        required: true,
        type: 'text',
      },
      {
        id: '2',
        question: 'What is your score on code\'s quality quality?',
        required: false,
        type: 'number',
      },
      {
        id: '3',
        question: 'When it\'s your birthday?',
        required: true,
        type: 'date',
      },
    ],
  },
});

/**
 * Calls backend service to save the given user's answers
 * @param {*} questions Array of questions that contain the provided answers
 */
const saveAnswers = async (questions) => Axios.post(`${BASE_URL}/answers`, questions.map(({ id, answer }) => ({ id, answer })));

export default {
  getQuestions,
  saveAnswers,
};

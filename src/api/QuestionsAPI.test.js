import axiosMock from 'axios';
import QuestionsAPI from './QuestionsAPI';

jest.mock('axios');

const BASE_URL = 'https://us-central1-zx-interview-exercise.cloudfunctions.net/api';

test('call getQuestions', async () => {
  const response = {
    data: {
      questions: [
        {
          id: '1',
          question: 'Write a lambda function to fetch data from a DynamoDB and a relational DB. Upload your code in your GitHub account and share URL of the repository to validate the code. Try to use dynamic configurations and using Serverless framework is mandatory.',
          required: true,
          type: 'text',
        },
      ],
    },
  };

  axiosMock.get.mockResolvedValueOnce(response);

  const results = await QuestionsAPI.getQuestions();

  expect(axiosMock.get).toHaveBeenLastCalledWith(`${BASE_URL}/questions`);
  expect(results).toBe(response);
});

test('call saveAnswers', async () => {
  const questions = [
    {
      id: '1',
      question: 'Write a lambda function to fetch data from a DynamoDB and a relational DB. Upload your code in your GitHub account and share URL of the repository to validate the code. Try to use dynamic configurations and using Serverless framework is mandatory.',
      required: true,
      type: 'text',
      answer: 'something',
    },
  ];

  await QuestionsAPI.saveAnswers(questions);

  expect(axiosMock.post).toHaveBeenLastCalledWith(`${BASE_URL}/answers`, [{ id: '1', answer: 'something' }]);
});

import React from 'react';
import { render, waitForElement, act } from '@testing-library/react';
import axiosMock from 'axios';
import App from './App';

jest.mock('axios');

test('renders loading and then the questions list', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: {
      questions: [{
        id: '1',
        question: 'Write a lambda function to fetch data from a DynamoDB and a relational DB. Upload your code in your GitHub account and share URL of the repository to validate the code. Try to use dynamic configurations and using Serverless framework is mandatory.',
        required: true,
        type: 'text',
      }],
    },
  });

  const { getByText } = render(<App />);

  expect(getByText('Loading')).toBeInTheDocument();

  await waitForElement(() => getByText('Save Answers'));

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
});

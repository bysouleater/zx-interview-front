import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import QuestionCard from './QuestionCard';


test('renders question in initial state', () => {
  const question = {
    id: '1',
    question: 'Write a lambda function to fetch data from a DynamoDB and a relational DB. Upload your code in your GitHub account and share URL of the repository to validate the code. Try to use dynamic configurations and using Serverless framework is mandatory.',
    required: true,
    type: 'text',
  };
  const { container } = render(<QuestionCard question={question} setAnswerValue={() => {}} />);
  expect(container).toMatchSnapshot();
});

test('renders question with value and error', () => {
  const question = {
    id: '1',
    question: 'Write a lambda function to fetch data from a DynamoDB and a relational DB. Upload your code in your GitHub account and share URL of the repository to validate the code. Try to use dynamic configurations and using Serverless framework is mandatory.',
    required: true,
    type: 'text',
    answer: 'something',
    hasError: true,
  };
  const { container } = render(<QuestionCard question={question} setAnswerValue={() => {}} />);
  expect(container).toMatchSnapshot();
});

test('calls update value on change event', () => {
  const question = {
    id: '1',
    question: 'Write a lambda function to fetch data from a DynamoDB and a relational DB. Upload your code in your GitHub account and share URL of the repository to validate the code. Try to use dynamic configurations and using Serverless framework is mandatory.',
    required: true,
    type: 'text',
  };
  const setAnswerValue = jest.fn();

  const { container } = render(<QuestionCard
    question={question}
    setAnswerValue={setAnswerValue}
  />);

  fireEvent.change(container.querySelector('input'), { target: { value: 'a' } });

  expect(setAnswerValue).toHaveBeenLastCalledWith(question.id, 'a');
});

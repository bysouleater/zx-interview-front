import React from 'react';
import { render } from '@testing-library/react';
import QuestionsList from './QuestionsList';

test('renders empty list', () => {
  const { container } = render(<QuestionsList setAnswerValue={() => {}} />);
  expect(container).toMatchSnapshot();
});

test('renders questions', () => {
  const questions = [{ id: 'test1' }, { id: 'test2' }];
  const { container } = render(<QuestionsList setAnswerValue={() => {}} questions={questions} />);
  expect(container).toMatchSnapshot();
});

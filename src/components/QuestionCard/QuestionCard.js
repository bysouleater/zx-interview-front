import PropTypes from 'prop-types';
import React from 'react';
import { Form, Segment } from 'semantic-ui-react';
import { QuestionInput, QuestionText } from './QuestionCardElements';

const QuestionCard = ({ question, setAnswerValue }) => (
  <Segment>
    <Form>
      <Form.Field required={question.required}>
        <QuestionText>{question.question}</QuestionText>
        <QuestionInput
          placeholder="Your answer"
          type={question.type}
          error={question.hasError}
          value={question.answer || ''}
          onChange={(e, data) => setAnswerValue(question.id, data.value)}
        />
      </Form.Field>
    </Form>
  </Segment>
);

QuestionCard.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string,
    question: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'number', 'date']),
    hasError: PropTypes.bool,
    answer: PropTypes.string,
  }).isRequired,
  setAnswerValue: PropTypes.func.isRequired,
};

export default QuestionCard;

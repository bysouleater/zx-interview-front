import React from 'react';
import PropTypes from 'prop-types';
import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionsList = ({ questions, setAnswerValue }) => (
  <div>
    {questions.map((question) => (
      <QuestionCard
        key={question.id}
        question={question}
        setAnswerValue={setAnswerValue}
      />
    ))}
  </div>
);

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
  setAnswerValue: PropTypes.func.isRequired,
};

QuestionsList.defaultProps = {
  questions: [],
};

export default QuestionsList;

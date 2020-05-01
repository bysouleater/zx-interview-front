import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const QuestionCard = ({ question }) => (
  <Card fluid header={question.question} />
);

QuestionCard.propTypes = {
  question: PropTypes.shape({
    id: PropTypes.string,
    question: PropTypes.string,
  }).isRequired,
};

export default QuestionCard;

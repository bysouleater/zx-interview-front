import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import QuestionCard from '../QuestionCard/QuestionCard';

const QuestionsList = ({ questions }) => (
  <Card.Group>
    {questions.map((question) => (<QuestionCard key={question.id} question={question} />))}
  </Card.Group>
);

QuestionsList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
};

QuestionsList.defaultProps = {
  questions: [],
};

export default QuestionsList;

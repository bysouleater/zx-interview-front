import React, { useEffect, useState } from 'react';
import {
  Dimmer, Header, Loader, Message,
} from 'semantic-ui-react';
import QuestionsAPI from './api/QuestionsAPI';
import './App.css';
import { AppContainer, SaveButton } from './AppElements';
import QuestionsList from './components/QuestionsList/QuestionsList';
import isValidAnswer from './utils/isValidAnswer';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [canSave, setCanSave] = useState(false);
  const [networkError, setNetworkError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  /**
   * Load questions from backend
   */
  const loadQuestions = async () => {
    setLoading(true);
    try {
      const { data: { questions: retrievedQuestions } } = await QuestionsAPI.getQuestions();
      setQuestions(retrievedQuestions);
    } catch (e) {
      setNetworkError('Sorry! Could not retrieve questions. Please try again');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Update question's answer as the user types and validates it's value
   * @param {*} id The id of the question
   * @param {*} value The value to save as answer for given question
   */
  const setAnswerValue = (id, value) => {
    const newQuestions = questions.map(
      (question) => (
        question.id === id
          ? { ...question, answer: value, hasError: !isValidAnswer(value, question) }
          : question
      ),
    );
    setQuestions(newQuestions);

    // Disable save button if at least 1 question has error or is required and has no answer
    setCanSave(!newQuestions.find(
      ({ hasError, required, answer }) => hasError || (required && !answer),
    ));
  };

  /**
   * Calls backend to save user's answers
   */
  const saveAnswers = async () => {
    setLoading(true);
    try {
      await QuestionsAPI.saveAnswers(questions);
      await loadQuestions();
      setSuccessMessage('Thanks for your answers!');
    } catch (e) {
      setNetworkError('Sorry! Could not save answers. Please try again');
    } finally {
      setLoading(false);
    }
  };

  // Initial loading of questions
  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <AppContainer text>
      <Header as="h1" textAlign="center">ZX Interview Survey</Header>
      <Dimmer active={loading}><Loader>Loading</Loader></Dimmer>
      {networkError && (
        <Message negative>
          <Message.Header>{networkError}</Message.Header>
        </Message>
      )}
      {successMessage && (
        <Message success>
          <Message.Header>{successMessage}</Message.Header>
        </Message>
      )}
      <QuestionsList questions={questions} setAnswerValue={setAnswerValue} />
      {questions.length > 0 && <SaveButton color="violet" disabled={!canSave} onClick={saveAnswers}>Save Answers</SaveButton>}
    </AppContainer>
  );
};

export default App;

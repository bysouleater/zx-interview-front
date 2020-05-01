import React, { useState, useEffect } from 'react';
import {
  Container, Header, Loader, Dimmer,
} from 'semantic-ui-react';
import './App.css';
import QuestionsList from './components/QuestionsList/QuestionsList';
import QuestionsAPI from './api/QuestionsAPI';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  const loadQuestions = async () => {
    setLoading(true);
    // setQuestions(await QuestionsAPI.getQuestions());
    setQuestions(QuestionsAPI.getQuestions());
    setLoading(false);
  };

  useEffect(() => {
    loadQuestions();
  });

  return (
    <Container text style={{ marginTop: 50, marginBottom: 50 }}>
      <Header as="h1" textAlign="center">ZX Interview Survey</Header>
      <Dimmer active={loading}><Loader>Loading</Loader></Dimmer>
      <QuestionsList questions={questions} />
    </Container>
  );
};

export default App;

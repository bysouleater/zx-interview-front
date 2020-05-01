import React, { useState, useEffect } from 'react';
import {
  Container, Header, Loader, Dimmer,
} from 'semantic-ui-react';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(false);

  const loadQuestions = async () => {
    setLoading(true);
    // await QuestionsAPI.getQuestions();
    setLoading(false);
  };

  useEffect(() => {
    loadQuestions();
  });

  return (
    <Container text style={{ marginTop: 50, marginBottom: 50 }}>
      <Header as="h1" textAlign="center">ZX Interview Survey</Header>
      <Dimmer active={loading}><Loader>Loading</Loader></Dimmer>

    </Container>
  );
};

export default App;

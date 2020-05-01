import styled from 'styled-components';
import { Form } from 'semantic-ui-react';

export const QuestionText = styled.label`
  && {
    font-weight: normal !important;
    font-size: 1.1em !important;
  }
`;

export const QuestionInput = styled(Form.Input)`
  .ui.input input {
    border-top: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
    border-radius: 0 !important;
  }
`;

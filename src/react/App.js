import React from 'react';
import styled from 'styled-components';
import TextInput from './TextInput';

const App = () => {
  return (
    <AppStyled>
      <label>This is React App</label>
      <TextInput />
    </AppStyled>
  );
};

export default App;

const AppStyled = styled.div`
  background-color: teal;
  color: white;
  margin: 10px 0;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

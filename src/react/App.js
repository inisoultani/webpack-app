import React from 'react';
import styled from 'styled-components';

const App = () => {
  return <AppStyled>This is React App</AppStyled>;
};

export default App;

const AppStyled = styled.div`
  background-color: teal;
  color: white;
  margin: 10px 0;
  padding: 10px 20px;
`;

import React from 'react';
import styled from 'styled-components';
// import TextInput from './TextInput';

const TextInput = React.lazy(() => {
  // test simulate delay
  return Promise.all([
    import('./TextInput'),
    new Promise((resolve, reject) => setTimeout(resolve, 300)),
  ]).then((results) => results[0]);
});

const App = () => {
  return (
    <AppStyled>
      <label>This is React App</label>
      <React.Suspense fallback="Loading..">
        <TextInput />
      </React.Suspense>
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

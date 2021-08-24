import React, { useState } from 'react';
import styled from 'styled-components';

const TextInput = () => {
  const [text, setText] = useState(null);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <InputContainerStyled>
      <input
        type="text"
        placeholder="please type something"
        onChange={onChange}
      ></input>
      <label>{text}</label>
    </InputContainerStyled>
  );
};

export default TextInput;

const InputContainerStyled = styled.div`
  display: flex;
  flex-grow: 0.75;
  align-items: center;
  column-gap: 20px;

  & > input {
    border: none;
    width: 250px;
    text-align: center;
    padding: 5px 10px;
    border-radius: 4px;
  }
`;

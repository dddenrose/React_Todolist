import React from "react";
import styled from 'styled-components';

const regularColor = "rgba(112, 112, 112, 255)"
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90vw;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  font-size: 24px;
  color: ${regularColor};
  border-bottom: 2px solid ${regularColor};
  background: none;
  height: 40px;
  box-sizing: border-box;
  padding: 0px 5px;
  &::placeholder {
    font-size: 24px;
    color: rgba(190,189,189,255);
  }
`

const Button = styled.button`
  background-color: white;
  padding: 6.5px 20px;
  border: 2px solid ${regularColor};
  color: ${regularColor};
  font-size: 20px;
  cursor: pointer;
`

const Add = ({ setTitle, title, add }) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Add your task here..."
        onChange={(title) => {
          setTitle(title.target.value);
        }}
        value={title}
      />
      <Button onClick={add}>Add</Button>
    </Container>
  );
};

export default Add;
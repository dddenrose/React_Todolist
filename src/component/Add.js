import React, { useState } from "react";
import styled from 'styled-components';

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
  border-bottom: 1px solid black;
  background: none;
  padding-bottom: 8px;
`

const Button = styled.button`
  background-color: white;
  padding: 3px 10px;
  border: 1px solid black;
`



const Add = ({ todo, setTodo }) => {
  const [item, setItem] = useState(null);

  const inputHandler = (title) => {
    let newItem = {
      done: false,
      title: title,
      time: ""
    };
    setItem(newItem);
  };

  const add = () => {
    let newTodo = todo.concat(item);
    setTodo(newTodo);
    // setItem(null);
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Add your task here..."
        onChange={(e) => {
          inputHandler(e.target.value);
        }}
        // value={item.title}
      />
      <Button onClick={add}>Add</Button>
    </Container>
  );
};

export default Add;

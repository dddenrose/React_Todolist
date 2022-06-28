import React from "react";
import styled from 'styled-components';

const regularSize = "24px";
const regularColor = "rgba(112, 112, 112, 255)"
const Button = styled.div`
  font-size: ${regularSize};
  display: none;
  border-bottom: 1px solid ${regularColor};
  margin-right: 40px;
  font-weight: bold;
  cursor: pointer;
  &:last-child {
    margin-right:0;
  }
`;

const Title = styled.div`
  font-size: ${regularSize};
  flex: 1;
  text-align: left;
  text-decoration: ${props => props.data.time ? "line-through" : "none"};
  letter-spacing: 1px;
`;

const Time = styled.div`
  font-size: ${regularSize};
  color: ${regularColor};
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 80vw;
  height: 60px;
  margin-bottom: 20px;
  padding: 5px 20px;
  box-sizing: border-box;
  transition: all .3s ease-in;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1)
  }
  &:hover ${Time} {
    display: none;
  }
  &:hover ${Button} {
    display: flex;
  }
`;

const Todo = ({ data, done, deleteTodo }) => {
  return (
    <div>
      {data.map((data) => (<Container key={data.id}>
        <Title data={data}>{data.title}</Title>
        <Time>
          {data.time && <div>完成時間:{data.time}</div>}
        </Time>
        <Button onClick={() => done(data)}>{data.time ? `Mark as todo` : `Mark as done`}</Button>
        <Button onClick={() => deleteTodo(data)}>Delete</Button>
      </Container>))}
    </div>
  );
};

export default Todo;
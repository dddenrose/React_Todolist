import React from "react";
import styled from 'styled-components';

const regularSize = "24px";
const regularColor = "rgba(112, 112, 112, 255)"
const Fn = styled.div`
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
  text-decoration: ${props => !props.e.done ? "none" : "line-through"};
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
  &:hover ${Fn} {
    display: flex;
  }
`;

const Todo = ({ e, setTodo, index, todo }) => {
  const time = new Date()
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  let hour = time.getHours();
  let min = time.getMinutes();
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  let nowTime = `${year}/${month}/${date} ${hour}:${min}`

  const done = () => {
    let newTodo = JSON.parse(JSON.stringify(todo));
    newTodo[index].done = !newTodo[index].done;
    newTodo[index].time = nowTime;
    setTodo(newTodo);
  };

  const deleteTodo = () => {
    let newTodo = JSON.parse(JSON.stringify(todo));
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }

  return (
    <div>
      <Container>
        <Title e={e}>{e.title}</Title>
        <Time className="time">
          {e.done && <div className="time">完成時間:{e.time}</div>}
        </Time>
        <Fn onClick={done}>{!e.done ? `Mark as done` : `Mark as todo`}</Fn>
        <Fn onClick={deleteTodo}>Delete</Fn>
      </Container>
    </div>
  );
};

export default Todo;
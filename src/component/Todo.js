import React from "react";
import styled from 'styled-components';

const Fn = styled.div`
  display: none;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(112, 112, 112, 255);
  margin-right: 10px;
`;

const Title = styled.div`
  flex: 1;
  text-decoration: ${props => !props.e.done ? "none" : "line-through"};
`;

const Time = styled.div`
  color: black;
`;

const Container = styled.div`
  width: 80vw;
  display: flex;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2)
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
  const nowTime = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()} ${time.getHours()}:${time.getMinutes()}`
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
        <Fn onClick={done}>Mark as done</Fn>
        <Fn onClick={deleteTodo}>Delete</Fn>
      </Container>
    </div>
  );
};

export default Todo;


// import React from "react";
// import StyledTodo from "../style_component/styledTodo"

// const Todo = ({ e, setTodo, index, todo }) => {
//   const time = new Date()
//   const nowTime = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()} ${time.getHours()}:${time.getMinutes()}`

//   const done = () => {
//     let newTodo = JSON.parse(JSON.stringify(todo));
//     newTodo[index].done = !newTodo[index].done;
//     newTodo[index].time = nowTime;
//     setTodo(newTodo);
//   };

//   const deleteTodo = () => {
//     let newTodo = JSON.parse(JSON.stringify(todo));
//     newTodo.splice(index, 1);
//     setTodo(newTodo);
//   }

//   return (
//     <div>
//       <div className="todo">
//         <div className="title" style={e.done ? {color: "red"} : {color: "black"}}>{e.title}</div>
//         {e.done && <div className="time">完成時間:{e.time}</div>}
//       </div>
//       <button onClick={done}>Mark as done</button>
//       <button onClick={deleteTodo}>Delete</button>
//     </div>
//   );
// };

// export default Todo;

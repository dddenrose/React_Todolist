import React, { useEffect } from "react";
import styled from 'styled-components';
import Todo from "./Todo";

const regularColor = "rgba(112, 112, 112, 255)"
const Input = styled.input`
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;
`

const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: white;
  border: 1px solid ${regularColor};
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`

const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
    ${Input} {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }
    &:hover ${Input} ~ ${Span}{
      background-color: #ccc;
    }
    ${Input}:checked ~ ${Span} {
      background-color: ${regularColor};
    }
    ${Input}:checked ~ ${Span}:after {
      display: block;
    }
    ${Span}:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
}
`


const Label = ({ showDone, setShowDone, tempTodo, setTempTodo, todo }) => {
  const show = () => {
    setShowDone(!showDone);
    // let notYet = todo.map((e) => {
    //   if(!e.done) {
    //     return e;
    //   }
    // })
    // let all = todo;
    // if(showDone) {
    //   setTempTodo(all);
    // } else {
    //   setTempTodo(notYet);
    // }
  };

  return (
    <Container>Show done items
      <Input type="checkbox" checked={showDone} onChange={show}/>
      <Span></Span>
    </Container>
  );
};

export default Label;
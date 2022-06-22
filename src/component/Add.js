import React, { useState } from "react";

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
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add your task here..."
        onChange={(e) => {
          inputHandler(e.target.value);
        }}
      />
      <button onClick={add}>Add</button>
    </div>
  );
};

export default Add;

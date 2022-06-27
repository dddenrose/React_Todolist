import { useState } from "react";
import Navigation from "./component/Navigation";
import Add from "./component/Add";
import Info from "./component/Info";
import Todo from "./component/Todo";
import Container from "./container/Container";

let time = new Date()
let year = time.getFullYear();
let month = time.getMonth() + 1;
let date = time.getDate();
let hour = time.getHours();
let min = time.getMinutes();
let nowTime = `${year}/${month < 10 ? month = "0" + month : month}/${date} ${hour < 10 ? hour = "0" + hour : hour}:${min < 10 ? min = "0" + min : min}`

const App = () => {
  const [todo, setTodo] = useState([]);
  const [showDone, setShowDone] = useState(false);
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);
  
  const done = (data) => {
    const newTodo = todo.map((element) => {
      if (element.id === data.id) {
        return { ...element, time: element.time ? null : nowTime }
      }
      return element;
    })
    setTodo(newTodo);
  };

  const deleteTodo = (data) => {
    const newTodo = todo.filter(element => element.id !== data.id)
    setTodo(newTodo)
  }

  const add = () => {
    setId(prev => prev + 1);
    if (title) {
      const newTodo = [...todo, {
        id,
        title,
        time: null
      }];
      setTodo(newTodo);
      setTitle("");
    };
  };

  const renderTodo = () => {
    let temp = null;
    showDone ? temp = todo : temp = todo.filter((e) => !e.time);
    return temp.map((data) => {
      return <Todo data={data} key={data.id} deleteTodo={deleteTodo} done={done} />
    })
  };

  return (
    <Container>
      <Navigation />
      <Add todo={todo} setTodo={setTodo} title={title} id={id} add={add} setTitle={setTitle} />
      <Info setShowDone={setShowDone} showDone={showDone} todo={todo} />
      {renderTodo()}
    </Container>
  )
}
export default App;
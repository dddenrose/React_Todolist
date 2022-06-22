import "./css/app.css";
import Navigation from "./component/Navigation";
import Add from "./component/Add";
import Info from "./component/Info";
import TodoContainer from "./component/TodoContainer";
import Container from "./component/Container";
import { useEffect, useState } from "react";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [showDone, setShowDone] = useState(false);
  const [count, setCount] = useState(null);

  useEffect(() => {
    let newCount = 0;
    todo.forEach((e) => {
      if (!e.done) {
        newCount++;
      }
    })
    setCount(newCount);
  }, [todo])


  return (
    <div className="App">
      <Container>
        <Navigation />
        <Add todo={todo} setTodo={setTodo} />
        <Info setShowDone={setShowDone} showDone={showDone} count={count} />
        <TodoContainer todo={todo} showDone={showDone} setTodo={setTodo} />
      </Container>
    </div>
  );
}
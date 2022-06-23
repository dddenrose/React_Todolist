import { useEffect, useState } from "react";
import Navigation from "./component/Navigation";
import Add from "./component/Add";
import Info from "./component/Info";
import TodoContainer from "./container/TodoContainer";
import Container from "./container/Container";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [tempTodo, setTempTodo] = useState([]);
  const [showDone, setShowDone] = useState(false);
  const [count, setCount] = useState(null);

  useEffect(() => {
    if (todo) {
      setTempTodo(todo.filter(e => !e.done));
    }
  }, [todo])

  useEffect(() => {
    if(showDone) {
      setTempTodo(todo);
    }
    if(!showDone) {
      setTempTodo(todo.filter(e => !e.done));
    }
  },[showDone])

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
    <Container>
      <Navigation />
      <Add todo={todo} setTodo={setTodo} />
      <Info setShowDone={setShowDone} showDone={showDone} count={count} tempTodo={tempTodo} setTempTodo={setTempTodo} todo={todo} />
      <TodoContainer todo={todo} showDone={showDone} setTodo={setTodo} tempTodo={tempTodo} />
    </Container>
  )
}
export default App;
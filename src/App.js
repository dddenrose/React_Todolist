import { useEffect, useState } from "react";
import Navigation from "./component/Navigation";
import Add from "./component/Add";
import Info from "./component/Info";
import TodoContainer from "./container/TodoContainer";
import Container from "./container/Container";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [showDone, setShowDone] = useState(false);
  const [count, setCount] = useState(null);

  useEffect(() => {
    let newCount = 0;
    todo.forEach((e) => {
      if (!e.time) {
        newCount++;
      }
    })
    setCount(newCount);
  }, [todo])

  return (
    <Container>
      <Navigation />
      <Add todo={todo} setTodo={setTodo} />
      <Info setShowDone={setShowDone} showDone={showDone} count={count} todo={todo} />
      <TodoContainer todo={todo} showDone={showDone} setTodo={setTodo}/>
    </Container>
  )
}
export default App;
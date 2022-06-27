import React from 'react'
import Todo from '../component/Todo'

const TodoContainer = ({ todo, setTodo, showDone }) => {
    let renderTodo = () => {
        let temp = null;
        if (showDone) {
            temp = todo;
        } else {
            temp = todo.filter((e) => !e.time);
        }
        return temp.map((e) => {
            return <Todo e={e} key={e.title} setTodo={setTodo} todo={todo} />
        })
    };

    return (
        <div>
            {renderTodo()}
        </div>
    )
}

export default TodoContainer
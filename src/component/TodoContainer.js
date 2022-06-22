import React from 'react'
import Todo from './Todo'

const TodoContainer = ({ todo, setTodo, showDone }) => {
    return (
        <div>
            {todo && !showDone && todo.map((e, index) => {
                if (!e.done) {
                    return <Todo e={e} key={e.title} setTodo={setTodo} index={index} todo={todo} />
                }
            })}
            {todo && showDone && todo.map((e, index) => {
                return <Todo e={e} key={e.title} setTodo={setTodo} index={index} todo={todo} />
            })}
        </div>
    )
}

export default TodoContainer
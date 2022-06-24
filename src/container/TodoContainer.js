import React from 'react'
// import { useEffect, useState } from "react";
import Todo from '../component/Todo'

const TodoContainer = ({ todo, setTodo, showDone }) => {
    // const [tempTodo, setTempTodo] = useState(null);

    // useEffect(() => {
    //     setTempTodo(todo);
    //     if (todo) {
    //         let notYet = todo.map((e) => {
    //             if (!e.done) { return e }
    //         });

    //         showDone ? setTempTodo(notYet) : setTempTodo(todo);
    //     }
    // }, [todo, showDone])

    // useEffect(() => {
    //     if (todo) {
    //         let notYet = todo.map((e) => {
    //             if(!e.done) {return e}
    //         });
    //         showDone ? setTempTodo(notYet) : setTempTodo(todo);
    //     }
    // }, [showDone])

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
        // <div>
        //     {tempTodo && tempTodo.map((e, index) => {
        //         return <Todo e={e} key={e.title} setTodo={setTodo} index={index} todo={todo} />
        //     })}
        // </div>
        // <div>
        //     {tempTodo && tempTodo.map((e, index) => {
        //         return <Todo e={e} key={e.title} setTodo={setTodo} index={index} todo={todo} />
        //     })}
        // </div>
        //     <div>
        //     {tempTodo && tempTodo.map((e, index) => {
        //         return <Todo e={e} key={e.title} setTodo={setTodo} index={index} todo={todo} />
        //     })}
        // </div>
    )
}

export default TodoContainer

// <div>
//             {todo && !showDone && todo.map((e, index) => {
//                 if (!e.done) {
//                     return <Todo e={e} key={e.title} setTodo={setTodo} index={index} todo={todo} />
//                 }
//             })}
//             {todo && showDone && todo.map((e, index) => {
//                 return <Todo e={e} key={e.title} setTodo={setTodo} index={index} todo={todo} />
//             })}
//         </div>



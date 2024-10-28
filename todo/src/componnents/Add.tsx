import React, { useState } from 'react'
import Todo from '../models/TodoModel'

interface Props {
    setTodos: (x: (todos: Todo[]) => Todo[]) => void
    todos:Todo[]
}

export default function Add({ setTodos,todos }: Props) {
    const [title, settitle] = useState("")
    const addTodo = () => {
        const todo = new Todo(title)
        setTodos(todos => [...todos, todo])
        settitle("")
    }
    const completed = () =>{
        const copy = [...todos]
        const num:number = copy.filter(item => item.completed).length
        return num
    }
    return (
        <div className='add card'>
            <input type="text"
                placeholder="type here"
                onChange={e => { settitle(e.target.value) }}
                value={title} />
            <button onClick={addTodo}>Add Todo</button>
            <p>{completed()}/{todos.length}</p>
        </div>
    )
}

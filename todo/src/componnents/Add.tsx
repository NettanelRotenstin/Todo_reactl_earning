import React, { useState } from 'react'
import Todo from '../models/TodoModel'

interface Props {
    setTodos: (x: (todos: Todo[]) => Todo[]) => void
}

export default function Add({ setTodos }: Props) {
    const [title, settitle] = useState("")
    const addTodo = () => {
        const todo = new Todo(title)
        setTodos(todos => [...todos, todo])
        settitle("")
    }
    return (
        <div className='add card'>
            <input type="text"
                placeholder="type here"
                onChange={e => { settitle(e.target.value) }}
                value={title} />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

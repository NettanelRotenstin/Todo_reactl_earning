import React from 'react'
import Todo from '../models/TodoModel'

interface Props {
    setTodos: (todos: Todo[]) => void
}

export default function Add({setTodos}:Props) {
    return (
        <div className='add card'>
            Add
        </div>
    )
}

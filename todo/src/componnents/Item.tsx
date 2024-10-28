import React from 'react'
import Todo from '../models/TodoModel'
interface Props {
    todo: Todo
    setTodos: (x: (todos: Todo[]) => Todo[]) => void
}
export default function Item({ todo, setTodos }: Props) {
    const handleCompletedChange = (checked:boolean) => {
        setTodos(todos => {
            const copy = [...todos]
            const td = copy.find(curr=>curr.id === todo.id)
            td!.completed = checked
            return copy
        })
     }
    return (
        <div className='item'>
            <input type="checkbox" 
            checked={todo.completed}
            onChange={e=>handleCompletedChange(e.target.checked)}>

            </input>
            <p>{todo.title}</p>
            <p>{todo.created_at.toISOString()}</p>
            <button>Delete</button>
        </div>
    )
}

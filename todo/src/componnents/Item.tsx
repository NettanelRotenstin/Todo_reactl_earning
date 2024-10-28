import React from 'react'
import Todo from '../models/TodoModel'
import moment from 'moment'
interface Props {
    todo: Todo
    setTodos: (x: (todos: Todo[]) => Todo[]) => void
}
export default function Item({ todo, setTodos }: Props) {

    const handleCompletedChange = (checked: boolean) => {
        setTodos(todos => {
            const copy = [...todos]
            const td = copy.find(curr => curr.id === todo.id)
            td!.completed = checked
            return copy
        })

    }
    const handleDeleteItem = () => {
        setTodos(todos => {
            const copy = [...todos]
            return copy.filter(item => item.id != todo.id)
        })
    }
    return (
        <div className='item'>
            <input type="checkbox"
                checked={todo.completed}
                onChange={e => handleCompletedChange(e.target.checked)}>

            </input>
            <p style={{textDecoration:todo.completed? "line-through":"none"}}>{todo.title}</p>
            <p>{moment(todo.created_at).fromNow()}</p>
            <button onClick={() => handleDeleteItem()}>Delete</button>
        </div>
    )
}

import React from 'react'
import Todo from '../models/TodoModel'
import Item from './Item'
interface Props {
  todos: Todo[]
  setTodos: (x: (todos: Todo[]) => Todo[]) => void

}
export default function List({ todos ,setTodos}: Props) {
  return (
    <div className='list card'>
      {todos.map(item => <Item key={item.id} todo={item} setTodos={setTodos} />)}
    </div>
  )
}

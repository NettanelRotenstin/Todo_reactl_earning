import React from 'react'
import Todo from '../models/TodoModel'
interface Props{
    todos:Todo[]
}
export default function List({todos}:Props) {
  return (
    <div className='list card'>
      List
    </div>
  )
}

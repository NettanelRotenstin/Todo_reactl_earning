import React, { useState } from 'react'
import Add from './componnents/Add'
import List from './componnents/List'
import Todo from './models/TodoModel'

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  return (
    <div className='app'>
      <Add setTodos={setTodos} />
      <List todos={todos} />
    </div>
  )
}




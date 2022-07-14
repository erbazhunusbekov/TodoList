import React, { useState, useEffect } from 'react'
import TodoFormFunction from './Components/TodoFormFunction'
import TodoFunction from './Components/TodoFunction'

const Home = () => {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])
  const [inp, setInp] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  const btnAdd = (inpVal) => {
    if (inpVal) {
      const newItem = {
        id: Math.random().toString(36).slice(3, 9),
        text: inpVal,
        complete: false,
        change: false
      }
      setTodos([...todos, newItem])
      console.log(todos);
    }
  }

  const btnDel = (id) => {
    setTodos([...todos.filter((item) => item.id !== id)])
  }

  const btnToggle = (id) => {
    setTodos([
      ...todos.map((item) => item.id === id ? { ...item, complete: true } : { ...item })
    ])
  }

  const changeTodo = (id) => {
    setTodos([
      ...todos.map((item) => {
        return item.id === id ? { ...item, change: true } : { ...item }
      })
    ])
  }

  const afterChange = (id, text) => {
    setTodos([
      ...todos.map((item) => {
        return item.id === id ? { ...item, text: text, change: false } : { ...item }
      })
    ])
  }

  return (
    <div>
      <h1>
        Number of Todo {todos.length}
      </h1>
      <TodoFormFunction
        inp={inp}
        setInp={setInp}
        setTodos={setTodos}
        todos={todos}
        btnAdd={btnAdd} />
      {todos.map((item) => {
        return (
          <TodoFunction
            changeTodo={changeTodo}
            key={item.key}
            btnDel={btnDel}
            btnToggle={btnToggle}
            item={item}
            afterChange={afterChange}
          />
        )
      })}
    </div>
  )
}

export default Home
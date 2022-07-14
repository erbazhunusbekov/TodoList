import React, { useState } from 'react'

function TodoFunction({ item, btnDel, btnToggle, changeTodo, afterChange }) {

  const [val, setVal] = useState('')

  const forForm = (e) => {
    e.preventDefault()
    afterChange(item.id, val)
  }

  return (
    <div key={item.key}>
      {item.change ?
        <form onSubmit={(e) => forForm(e)}>
          <input
            value={val}
            type="text"
            id={item.id}
            placeholder={item.text}
            onChange={(e) => setVal(e.target.value)}
          />
          <button>
            Change
          </button>
        </form>
        :
        <div>
          <span style={{ textDecoration: item.complete ? 'line-through' : '' }} onClick={() => btnToggle(item.id)}>
            {item.text}
          </span>
          <button onClick={() => changeTodo(item.id)} style={{ marginLeft: 20 }}>
            Change
          </button>
          <button disabled={item.complete ? false : true} onClick={() => btnDel(item.id)}>
            X
          </button>
        </div>}
    </div>
  )
}

export default TodoFunction
import React from 'react'

const TodoFormFunction = ({
  btnAdd,
  todos,
  setTodos,
  inp,
  setInp,
}) => {

  const sendData = (event) => {
    event.preventDefault()
    btnAdd(inp)
    setInp('')
  }

  const keypress = (e) => e.key == 'Enter' ? sendData() : '';

  const btnClear = () => {
    const conf = window.confirm('Вы уверены???')
    if ( conf ) {
      setTodos([])
      setInp('')
    }
  }

  return (
    <div>
      <form onSubmit={sendData}>
        <input
          placeholder='New todo...'
          type="text"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          onKeyPress={(e) => keypress(e)}
        />
        <button>
          Add
        </button>
        <button
          style={todos.length > 2 ? {display: 'inline-block'} : {display: 'none'}}
          onClick={() => btnClear()}
        >
          Clear all todos
        </button>
      </form>
    </div>
  )
}

export default TodoFormFunction
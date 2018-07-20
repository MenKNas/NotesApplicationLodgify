import React from 'react'

const TodoInput = ({handleChange,handleClickAdd}) => {
  return (
    <div>
      <input 
          onChange = {handleChange}
          placeholder = "Add new todo" 
          type="text"
      />
      <button onClick={handleClickAdd}> Add Todo </button>
    </div>
  )
}

export default TodoInput ;
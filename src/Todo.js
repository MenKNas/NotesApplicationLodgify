import React, { Component } from 'react';

const Todo = ({text,onClickDelete}) => {
  return (
    <div className="todo-item">
        {text}
        <span onClick={onClickDelete}>&times;</span>
    </div>
  )
}

export default Todo ;

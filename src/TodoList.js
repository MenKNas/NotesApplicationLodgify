import React from 'react';
import Todo from './Todo';

const TodoList = ({todos,onClickDelete}) => {
  return (
    <div>
       <h1>todos</h1>
        <p><span id="counter">1</span> remaining</p>
        <div>
          {
            todos.length
              ? todos.map((todo, index) => 
                <Todo 
                key={todo.id} 
                onClickDelete={() => this.handleClickDelete(index)} 
                text={todo.text} />)
              : 'You\'re all done 🌴'
          }
        </div>
    </div>
  )
}

export default TodoList ;

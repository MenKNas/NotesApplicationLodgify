import React, { Component } from 'react';
import { uniqueId } from 'lodash';

import Todo from './Todo';
import TodoList from './TodoList';

export class App extends Component {

  state = {
    todo: '',
    todos: [ { text: 'Add your first todo' } ]
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { todos: prevTodos } = prevState;
    const { todos } = this.state;
    if ( prevTodos.length !== todos.length ) {
      document.querySelector('#counter').innerText = todos.length;
    }
  }

  handleChange = event => this.setState({ todo: event.target.value });

  handleClickAdd = () => {
    const { todo, todos } = this.state;
    todo && this.setState({ todos: [ ...todos, { text: todo } ] });
  };

  handleClickDelete = index => {
    const { todos } = this.state;
    this.setState({ todos: [
      ...todos.slice(0, index),
      ...todos.slice(index + 1)
    ]});
  }

  render() {
    this.state.todos.forEach((todo, index) => {
      this.state.todos[index] = { ...todo, id: uniqueId() };
    });
    const { todo, todos } = this.state;
    return (
      <div className="todo-list">
        <TodoList 
          onClickDelete={this.handleClickDelete}
          todos = {todos} 
        />
        <div className="todo-input">
          <input 
            onChange={this.handleChange} 
            placeholder="..." 
            type="text" 
            value={todo}
            />
          <button onClick={this.handleClickAdd}>Add</button>
        </div>
      </div>
    )
  }

}

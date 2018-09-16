import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <TodoForm title="Add new item" />
        <TodoList />
      </div>
    );
  }
}

export default App;

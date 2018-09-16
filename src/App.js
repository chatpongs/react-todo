import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Study React',
        'Shopping',
        'Play games',
        'Sleep'
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <TodoForm title="Add new item" />
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default App;

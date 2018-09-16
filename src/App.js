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
  handleAddItem = (newItem) => {
    let { items } = this.state;
    items = [...items, newItem];
    this.setState({ items });
  }
  render() {
    return (
      <div className="container">
        <TodoForm title="Add new item" addItem={this.handleAddItem} />
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default App;

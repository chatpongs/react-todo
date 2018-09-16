import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  handleAddItem = (newItem) => {
    let { items } = this.state;
    items = [...items, newItem];
    this.setState({ items });
  }
  handleRemoveItem = (index) => {
    let { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
  }
  render() {
    return (
      <div className="container">
        <TodoForm title="Add new item" addItem={this.handleAddItem} />
        {
          this.state.items.length > 0 ? <TodoList items={this.state.items} removeItem={this.handleRemoveItem} /> : <div>No Items</div>
        }
      </div>
    );
  }
}

export default App;

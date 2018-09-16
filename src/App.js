import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="my-3"><h2>Add todo</h2></div>
        <div className="my-3">
          <form class="form-inline">
            <input className="form-control" type="text" value="" />
            <button className="btn btn-default ml-2">Add</button>
          </form>
        </div>
        <div><h2>Todos</h2></div>
        <div>Study React</div>
        <div>Shopping</div>
        <div>Play games</div>
        <div>Sleep</div>
      </div>
    );
  }
}

export default App;

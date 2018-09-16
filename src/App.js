import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="my-3"><h2>Add todo</h2></div>
        <div className="my-3">
          <form class="form-inline">
            <input className="form-control" type="text" value="" />
            <button className="btn btn-primary ml-2">Add</button>
          </form>
        </div>
        <div><h2>Todos</h2></div>
        <div className="py-2"><button className="btn btn-danger btn-sm mr-2">DEL</button>Study React</div>
        <div className="py-2"><button className="btn btn-danger btn-sm mr-2">DEL</button>Shopping</div>
        <div className="py-2"><button className="btn btn-danger btn-sm mr-2">DEL</button>Play games </div>
        <div className="py-2"><button className="btn btn-danger btn-sm mr-2">DEL</button>Sleep</div>
      </div>
    );
  }
}

export default App;

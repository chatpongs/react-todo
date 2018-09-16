import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <div><h2>Todos</h2></div>
        <div className="py-2"><button className="btn btn-danger btn-sm mr-2">DEL</button>Study React</div>
        <div className="py-2"><button className="btn btn-danger btn-sm mr-2">DEL</button>Shopping</div>
        <div className="py-2"><button className="btn btn-danger btn-sm mr-2">DEL</button>Play games </div>
        <div className="py-2"><button className="btn btn-danger btn-sm mr-2">DEL</button>Sleep</div>
      </div>
    )
  }
}

export default TodoList;
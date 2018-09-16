import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <div className="my-3"><h2>Add todo</h2></div>
        <div className="my-3">
          <form class="form-inline">
            <input className="form-control" type="text" value="" />
            <button className="btn btn-primary ml-2">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoForm;
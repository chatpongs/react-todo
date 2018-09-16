import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div><h2>Todos</h2></div>
        {
          this.props.items.map((item, index) => <div className="py-2" key={index}><button className="btn btn-danger btn-sm mr-2">DEL</button>{item}</div>)
        }
      </div>
    )
  }
}

export default TodoList;
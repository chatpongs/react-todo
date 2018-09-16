import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = index => {
    console.log(index);
  }
  render() {
    return (
      <div>
        <div><h2>Todos</h2></div>
        {
          this.props.items.map((item, index) =>
            <div className="py-2" key={index}>
              <button
                className="btn btn-danger btn-sm mr-2"
                onClick={() => this.handleClick(index)}
              >DEL</button>
              {item}
            </div>)
        }
      </div>
    )
  }
}

export default TodoList;
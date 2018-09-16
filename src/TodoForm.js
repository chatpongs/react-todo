import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      item: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.item);
  }
  handleChange = (event) => {
    this.setState({item: event.target.value});
  }
  render() {
    return (
      <div>
        <div className="my-3"><h2>{this.props.title}</h2></div>
        <div className="my-3">
          <form className="form-inline" onSubmit={this.handleSubmit}>
            <input className="form-control" type="text" value={this.state.item} onChange={this.handleChange} />
            <button className="btn btn-primary ml-2">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoForm;
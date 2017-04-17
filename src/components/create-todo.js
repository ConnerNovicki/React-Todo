import React from 'react';

class CreateTodo extends React.Component {
  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input type="text" placeholder="What do I need to do?"
                ref="createInput"/>
        <button>Submit</button>
      </form>
    );
  }
  handleCreate(event) {
    event.preventDefault();
    var newTask = this.refs.createInput.value;
    if (/\S/.test(newTask)) {
      this.props.createTask(newTask);
    }
    this.refs.createInput.value = "";
  }
};

export default CreateTodo;

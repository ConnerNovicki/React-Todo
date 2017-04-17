import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }
  renderTaskSection() {
    var {task, isComplete} = this.props;

    if (!this.state.isEditing) {
      var taskStyle = {
        color: isComplete ? 'green' : 'red',
        cursor: 'pointer'
      }
      return (
        <td style={taskStyle}
        onClick={this.props.toggleTask.bind(this, task)}>
        {this.props.task}
        </td>
      );
    }
    else {
      return (
        <td>
          <input type="text"
                 defaultValue={task}
                 ref="editTask"
          />
        </td>
      );
    }
  }
  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
      </td>
    );
  }
  onCancelClick() {
    this.setState({
      isEditing: false
    })
  }
  onDeleteClick() {
    this.props.deleteTask(this.props.task);
  }
  onEditClick() {
    this.setState({
      isEditing: true
    })
  }
  onSaveClick() {
    var editedTask = this.refs.editTask.value;
    this.props.editTask(this.props.task, editedTask);
    this.setState({
      isEditing: false
    })
  }
  onTaskClick() {
    this.setState({
      isComplete: this.state.isComplete ? false : false
    });
  }
  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionsSection()}
      </tr>
    );
  }
};

export default TodoListItem;

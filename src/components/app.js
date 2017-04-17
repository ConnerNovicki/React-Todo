import React from 'react';
import TodoList from './todo-list';
import CreateTodo from './create-todo';

const todos = [
  {
    task: 'Learn ReactJS',
    isComplete: false
  },
  {
    task: 'Ask Alex about the date',
    isComplete: true
  }
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: todos
    }
  }
  createTask(task) {
    if (_.find(this.state.todo, (t) => t.task === task)) {
      return;
    }
    this.state.todo.push({
      task,
      isComplete: false
    });
    this.setState({
      todo: this.state.todo
    });
  }
  editTask(oldTask, newTask) {
    if (_.find(this.state.todo, (t) => t.task === newTask)) {
      console.log("here");
      return;
    }
    const foundTodo = _.find(this.state.todo, (t) => t.task === oldTask);

    foundTodo.task = newTask;
    this.setState({
      todo: this.state.todo
    });
  }
  deleteTask(task) {
    const newTodos = _.remove(this.state.todo, (t) => t.task !== task);
    console.log(newTodos);
    this.setState({
      todo: newTodos
    });
  }
  toggleTask(task) {
    const foundTodo = _.find(this.state.todo, (t) => t.task === task);
    foundTodo.isComplete = !foundTodo.isComplete;
    this.setState({ todo: this.state.todo });
  }
  render() {
    return (
      <div>
        <h1>React Todo!</h1>
        <CreateTodo
        createTask={this.createTask.bind(this)}/>
        <TodoList
            todo={this.state.todo}
            toggleTask={this.toggleTask.bind(this)}
            editTask={this.editTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}/>
      </div>
    );
  }
};

export default App;

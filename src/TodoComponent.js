import React, {Component} from "react";
import TodoItem from "./TodoItem";

class TodoComponent extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["wash up", "eat some cheese", "take a nap", "take a shower"],
      age: 30,
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ age: 35 });
    }, 5000);
  }

  // todoList = () => {
  //   return this.state.todos.map((todo, index) => (
  //     <li className="list-group-item">{todo}</li>
  //   ))
  // }

  handleOnClick() {
    alert(`you clicked me`);
  }

  handleDelete(item) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((val, index) => item !== val),
    }));
  }

  render() {
    const todoList = this.state.todos.map((item, index) => (
      <TodoItem item={item} key={index} handleDelete={this.handleDelete} />
    ));

    return (
      <>
        <div className="container">
          <p onClick={this.handleOnClick}>
            The busiest people have the most leisure...
          </p>
          <p>{this.state.age}</p>
          <ul className="list-group">{todoList}</ul>
        </div>
      </>
    );
  }
}

export default TodoComponent
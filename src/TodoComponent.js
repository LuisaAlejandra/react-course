import React, { Component } from "react";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";

class TodoComponent extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["wash up", "eat some cheese", "take a nap", "take a shower"],
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleDelete(item) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((val, index) => item !== val),
    }));
  }

  handleAddItem(newItem) {
    this.setState((prevState) => ({
      todos: [...prevState.todos, newItem],
    }));
  }

  render() {
    const todoList = this.state.todos.map((item, index) => (
      <TodoItem item={item} key={index} handleDelete={this.handleDelete} />
    ));

    return (
      <>
        <br />
        <div className="container-fluid d-flex justify-content-center align-items-start">
          <div className="text-center">
            <p className="display-6">
              The busiest people have the most leisure...
            </p>
            <div className="w-70">
              <ul className="list-group">{todoList}</ul>
            </div>

            <AddItem onAddItem={this.handleAddItem} />
          </div>
        </div>
      </>
    );
  }
}

export default TodoComponent;

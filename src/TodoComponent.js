import React, {Component} from "react";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";

class TodoComponent extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["wash up", "eat some cheese", "take a nap", "take a shower"],
    };
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleDelete(item) {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((val, index) => item !== val),
    }));
  }

  handleAddItem(newItem) {
    this.setState((prevState) => ({
        todos: [...prevState.todos, newItem]
    }))
  }

  render() {
    const todoList = this.state.todos.map((item, index) => (
      <TodoItem item={item} key={index} handleDelete={this.handleDelete} />
    ));

    return (
      <>
        <div className="container">
          <p>
            The busiest people have the most leisure...
          </p>
          <ul className="list-group">{todoList}</ul>
          <AddItem onAddItem={this.handleAddItem} />
        </div>
      </>
    );
  }
}

export default TodoComponent
import "./App.css";
import React, { Component } from "react";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <TodoComponent />
    </>
  );
}

class TodoComponent extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["wash up", "eat some cheese", "take a nap", "wake"],
      age: 30,
    };
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

  render() {
    const todoList = this.state.todos.map((item, index) => (
      <li key={index} className="list-group-item">{item}</li>
    ));

    return (
      <>
        <div className="container">
          <p>The busiest people have the most leisure...</p>
          <p>{this.state.age}</p>
          <ul className="list-group">{todoList}</ul>
        </div>
      </>
    );
  }
}
export default App;

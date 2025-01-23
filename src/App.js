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
      todos: ["wash up", "eat some cheese", "take a nap"],
    };
  }

  render() {
    return (
      <>
        <div className="container">
          <p>The busiest people have the most leisure...</p>
          <ul className="list-group">
            <li className="list-group-item">{this.state.todos[0]}</li>
            <li className="list-group-item">{this.state.todos[1]}</li>
            <li className="list-group-item">{this.state.todos[2]}</li>
          </ul>
        </div>
      </>
    )
  }
}
export default App;

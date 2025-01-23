import "./App.css";
import React, { Component } from "react";
import Header from "./Header";

function App() {
  const myCheese = {
    name: "Camember",
    smellFactor: "Extreme pong",
    price: 3.5,
  };
  return (
    <>
      <Header />
      <TodoComponent mssg="I like cheese" cheese={myCheese} />
    </>
  );
}

class TodoComponent extends Component {
  render() {
    return (
      <>
        <p>
          <strong>{this.props.mssg}</strong>
        </p>
        <p>
          <strong>Cheese name:</strong> {this.props.cheese.name}
        </p>
        <p>
          <strong>Cheese smell factor:</strong> {this.props.cheese.smellFactor}
        </p>
        <p>
          <strong>Cheese price:</strong> {this.props.cheese.price}
        </p>
      </>
    );
  }
}
export default App;

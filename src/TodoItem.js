import React, {Component} from "react";

class TodoItem extends Component {
  render() {
    return (
      <li
        key={this.props.index}
        className="list-group-item list-group-item-secondary d-flex justify-content-between align-items-center text-break"
      >
        {this.props.item}
        <button
          type="button"
          className="btn-close"
          arial-label="Close"
          onClick={() => this.props.handleDelete(this.props.item)}
        ></button>
      </li>
    );
  }
}

export default TodoItem
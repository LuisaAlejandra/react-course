import React, { Component } from "react";

class AddItem extends Component {
    constructor() {
        super()
        this.newItem = React.createRef();
        this.handleAddItem = this.handleAddItem.bind(this)
    }

    handleAddItem(event) {
        event.preventDefault();
        // console.log(this.newItem.current.value)
        const newItemAdd = this.newItem.current.value
        this.props.onAddItem(newItemAdd)
        
        this.newItem.current.value = "";
    }

    render() {
        return(
            <form className="row g-2" onSubmit={this.handleAddItem}>
            <div className="col-auto">
                <input type="text" className="form-control" placeholder="Write a note" ref={this.newItem}/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">Add item</button>
            </div>
            </form>
        )
    }
}

export default AddItem
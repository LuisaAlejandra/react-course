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
            <>
            <br />
            <form className="row justify-content-end" onSubmit={this.handleAddItem}>
            <div className="col-auto col-12 col-md-6">
                <input type="text" className="form-control " placeholder="Write a note" ref={this.newItem}/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-2">Add note</button>
            </div>
            </form>
            </>
        )
    }
}

export default AddItem
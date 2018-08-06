import React, { Component } from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this);
    }
    handleDelete(item){
        const {deleteItem,index}=this.props;
        deleteItem(index);
    }

    render(){
        return (
            <div onClick={this.handleDelete}>{this.props.content}</div>
        )
    }
}

export default TodoItem;
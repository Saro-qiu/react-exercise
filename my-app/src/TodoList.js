import React, { Component } from 'react';
import logo from './logo.svg';
import TodoItem from './TodoItem';
import './App.css';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      list:['aa','bb'],
      inputval:''
    };
    this.getInputVal=this.getInputVal.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
  }

  getInputVal(e){
    this.setState({
      inputval:e.target.value
    })

  }

  handleClick(){
    const newlist=[...this.state.list,this.state.inputval];
    this.setState({
      list:newlist,
      inputval:''
    });
  }

  handleDelete(key){
    const newlist=[...this.state.list];
    newlist.splice(key,1);
    this.setState({
      list:newlist
    });
  }

  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputval} onChange={this.getInputVal} /><button onClick={this.handleClick}>add</button>
        </div>
        <ul>
          
          {this.state.list.map((item,index)=>{
            return <TodoItem deleteItem={this.handleDelete} content={item} index={index} />
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;

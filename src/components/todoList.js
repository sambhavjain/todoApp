import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor(props){
    super(props)
  }
  render() {
  	let todoList = []
  	todoList = this.props.list.map((obj,index)=>{
  		return <li key={index}>{obj.category}</li>
  	})

    return (
      <div>
      	<h4>Your Tasks</h4>
      	<div>
      		{todoList}
      	</div>
      </div>
    );
  }
}

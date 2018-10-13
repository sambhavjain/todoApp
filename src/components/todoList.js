import React, { Component } from 'react';
import TaskInfo from './taskInfo.js'

export default class TodoList extends Component {
  constructor(props){
    super(props)
  	this.state = {
  		openInfo : false
  	}
  }

  openInfo = (e, obj) => {
  	this.setState({openInfo : true, infoObj: obj})
  }

  render() {
  	let todoList = []
  	todoList = this.props.list.map((obj,index)=>{
  		return <li value={obj} key={index}><a onClick={(e)=>this.openInfo(e,obj)}>{obj.category}</a></li>
  	})

    return (
      <div>
      	<h4>Your Tasks</h4>
      	<div>
      		{todoList}
      		{this.state.openInfo ? <TaskInfo infoObj={this.state.infoObj}/> : null}
      	</div>
      </div>
    );
  }
}

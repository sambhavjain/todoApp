import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props){
    super(props)
    this.state = {
    	taskObj: {}
    }
  }

  handleChange = (e) => {
  	this.setState({[e.target.name]: e.target.value})
  	let taskObj = this.state.taskObj
  	taskObj[e.target.name] = e.target.value
  	this.setState({taskObj})
  }

  addTask = () => {
  	this.props.addTask(this.state.taskObj)
  }

  render() {
    return (
      <div>
      		<li>
	      		<label>Categaory</label>
	      		<input name="category" type="text" onChange={(e)=>this.handleChange(e)}/>
      		</li>
      		<li>
	      		<label>Task</label>
	      		<input name="task" type="text" onChange={(e)=>this.handleChange(e)}/>
      		</li>
      		<li>
	      		<label>Place</label>
	      		<input name="place" type="text" onChange={(e)=>this.handleChange(e)}/>
      		</li>
      		<button onClick={this.addTask}>Add</button>
      		<button onClick={this.props.closeModal}>Close</button>
      </div>
    );
  }
}

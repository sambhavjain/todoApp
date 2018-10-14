import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props){
    super(props)
    this.state = {
    	taskObj: {}
    }
  }
  
  componentDidMount(){
  	let modal = document.getElementById('myModal');
  	modal.style.display = 'block'
  }

  handleChange = (e) => {
  	this.setState({[e.target.name]: e.target.value})
  	let taskObj = this.state.taskObj
  	taskObj[e.target.name] = e.target.value
  	this.setState({taskObj})
  }

  addTask = () => {
  	this.props.closeModal()
  	this.props.addTask(this.state.taskObj)
  }

  render() {
    return (
      <div id="myModal" className="modal"> 
      	<div className="modal-content" onChange={(e)=>this.handleChange(e)}>
      		<header className="modalHeader">Add Your Task</header>
	      	<ul>
	      		<li>
		      		<label>Category</label>
		      		<input name="category" type="text" />
	      		</li>
	      		<li>
		      		<label>Task</label>
		      		<input name="task" type="text" />
	      		</li>
	      		{/*<li>
		      		<label>Place</label>
		      		<input name="place" type="text" />
	      		</li>*/}
	      	</ul>
	      	<div className="buttonContainer">
	      		<button className="buttonClass primary" onClick={this.addTask}>Add</button>
	      		<button className="buttonClass secondary" onClick={this.props.closeModal}>Close</button>
	      	</div>
      	</div>
      </div>
    );
  }
}

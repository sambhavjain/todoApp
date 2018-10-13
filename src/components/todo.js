import React, { Component } from 'react';
import EmptyList from './emptyList.js';
import TodoList from './todoList.js'
import Modal from './modal.js'

export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state = { openModal : false }
    this.todoList = []
  }

  openModal = () => {
    this.setState({openModal: true})
  }

  closeModal = () => {
    this.setState({openModal: false})
  }

  addTask = (obj) => {
    this.todoList.push(obj)
    this.setState({todoList: this.todoList})
    this.closeModal()
  }

  render() {
    return (
      <div className="">
        <h3>Todo Application</h3>
        <button className="addTask" onClick={this.openModal}>Add Task</button>
        {this.state.openModal ? <Modal closeModal={this.closeModal} addTask={this.addTask}/> : null}
        {this.todoList.length === 0 ? <EmptyList /> : <TodoList list={this.state.todoList}/>}
      </div>
    );
  }
}

import React, { Component } from 'react';
import EmptyList from './emptyList.js';
import TodoList from './todoList.js'
import CompletedTask from './completedTask.js'
import Modal from './modal.js'

export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state = { openModal : false, todoList:[], completedList: [] }
    this.todoList = []
    this.completedList = [] 
    this.uniqueID = new Set()
  }

  openModal = () => {
    this.setState({openModal: true})
  }

  closeModal = () => {
    this.setState({openModal: false})
  }

  generateUniqueID = () => {
    return Math.round(Math.random()*99)
  }

  addNewTask = (obj) => {
    let uniqueID = this.generateUniqueID()
    obj.id = uniqueID
    this.uniqueID.add(uniqueID)
    this.addToActiveTasks(obj) 
  }

  addToActiveTasks = (obj) => {
    this.todoList.push(obj)
    this.setState({todoList: this.todoList})
    this.removeFromCompletedList(obj.id)
  }

  addToCompletedTasks = (obj) => {
    this.completedList.push(obj)
    this.removeFromTodoList(obj.id)
    this.setState({completedList: this.completedList})
  }

  removeFromCompletedList = (id) => {
    let deletedIndex
    
    if(this.completedList.length){
      this.completedList.map((obj,index)=>{
        if(id === obj.id){
          deletedIndex = index
        }
      })
      this.completedList = this.completedList.splice(1,deletedIndex)
      this.setState({completedList: this.completedList})
    }
  }

  removeFromTodoList = (id) => {
    let deletedIndex
    
    if(this.todoList.length){
      this.todoList.map((obj,index)=>{
        if(id === obj.id){
          deletedIndex = index
        }
      })
      this.todoList = this.todoList.splice(1,deletedIndex)
      this.setState({todoList: this.todoList})
    }
  }

  render() {
    return (
      <div className="container">
        <h3>Todo Application</h3>
        <button className="addTaskButton" onClick={()=>this.openModal()}>Add Task</button>
        {this.state.openModal ? <Modal closeModal={this.closeModal} addTask={this.addNewTask}/> : null}
        <div className="taskContainer">
          {this.todoList.length === 0 && this.completedList.length === 0 ? <EmptyList msg="No Task Added" /> : <TodoList addToCompletedTasks={this.addToCompletedTasks} list={this.state.todoList}/>}
          {this.todoList.length !== 0 || this.completedList.length !== 0 ? <CompletedTask list={this.state.completedList} addToActiveTasks={this.addToActiveTasks} /> : null}
        </div>
      </div>
    );
  }
}

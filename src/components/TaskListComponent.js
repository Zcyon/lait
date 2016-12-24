'use strict';

import React from 'react';
import TaskItemComponent from './TaskItemComponent.js';
import TaskFormComponent from './TaskFormComponent.js';
import DeleteTaskModalComponent from './DeleteTaskModalComponent.js';
import { VelocityTransitionGroup } from 'velocity-react';

require('styles//TaskList.css');

class TaskListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitle: this.props.taskList.listTitle,
      taskElements: this.props.taskList.tasks,
      modalIsActive: false,
      taskToDelete: -1
    };

    this.toggleTask  = this.toggleTask.bind(this);
    this.addTask     = this.addTask.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteTask  = this.deleteTask.bind(this);
  }

  shouldComponentUpdate(newProps) {
    this.setState({
      listTitle: newProps.taskList.listTitle,
      taskElements: newProps.taskList.tasks
    });
    console.log('shouldComponentUpdate()');
    return true;
  }

  addTask(task) {
    let taskElements, taskId;
    taskElements = this.state.taskElements;
    taskId = taskElements.length;
    taskElements.push({
      id: taskId,
      completed: false,
      title: task.taskTitle,
      description: task.taskDescription
    });
    this.setState({taskElements: taskElements});
  }

  toggleTask(index) {
    let taskElements;
    taskElements = this.state.taskElements;
    taskElements.forEach((taskElement, taskIndex) => {
      if (index === taskElement.id) {
        index = taskIndex;
      }
    });

    taskElements[index].completed = !taskElements[index].completed;
    this.setState({ taskElements: taskElements });
  }

  renderPendingTasks() {
    let pendingTasks, pendingTaskElements;
    pendingTasks = this.getPendingTasks();
    pendingTaskElements = this.generateTaskItemComponents(pendingTasks);
    return (
      <VelocityTransitionGroup enter={{animation: 'slideDown'}} leave={{animation: 'slideUp'}}>
        {pendingTaskElements}
      </VelocityTransitionGroup>
    );
  }

  renderCompletedTasks() {
    let completedTasks, completedTaskElements;
    completedTasks = this.getCompletedTasks();
    completedTaskElements = this.generateTaskItemComponents(completedTasks);

    return (
      <VelocityTransitionGroup enter={{animation: 'slideDown'}} leave={{animation: 'slideUp'}}>
        {completedTaskElements}
      </VelocityTransitionGroup>
    );
  }

  getPendingTasks() {
    return this.state.taskElements.filter((task) => {
      return !task.completed;
    });
  }

  getCompletedTasks() {
    return this.state.taskElements.filter((task) => {
      return task.completed;
    });
  }

  generateTaskItemComponents(taskArray) {
    return taskArray.map((task, index) => {
      return <TaskItemComponent key={index} id={task.id} taskTitle={task.title} taskDescription={task.description} isCompleted={task.completed} toggleTask={this.toggleTask} toggleModal={this.toggleModal}  />
    }); 
  }

  toggleModal(index) {
    let modalIsActive, taskToDelete;
    modalIsActive = !this.state.modalIsActive;
    if (modalIsActive) {
      taskToDelete = index;
    } else {
      taskToDelete = -1;
    }
    this.setState({
      modalIsActive: modalIsActive,
      taskToDelete: taskToDelete
    });
  }

  deleteTask() {
    let taskElements, index;
    taskElements = this.state.taskElements;
    if (this.state.taskToDelete === -1) {
      return;
    }

    taskElements.forEach((taskElement, taskIndex) => {
      if (taskElement.id === this.state.taskToDelete) {
        index = taskIndex;
      }
    });

    taskElements.splice(index, 1);
    this.setState({
      taskElements: taskElements,
      taskToDelete: -1
    }, () => {
      this.toggleModal();
    });
  }

  render() {
    return (
      <div className="tasklist-component">
        {
          this.state.modalIsActive &&
          <DeleteTaskModalComponent toggleModal={this.toggleModal} deleteTask={this.deleteTask} />
        }
        <div className="tasklist-header">
          <br />
          <h2 className="title is-2 has-text-centered">{this.state.listTitle}</h2>
          <br />
        </div>
        <div className="tasklist-body">
          <h4 className="subtitle is-4">Pending tasks</h4>
          <div>
            {this.renderPendingTasks()}
          </div>
          {
            this.getPendingTasks().length <= 0 &&
            <div className="has-text-centered">
              <p>No pending tasks (HOORAAYY!)</p>
            </div>
          }
          <h4 className="subtitle is-4">Completed tasks</h4>
          <div>
            {this.renderCompletedTasks()}
          </div>
          {
            this.getCompletedTasks().length <= 0 &&
            <div className="has-text-centered">
              <p>No completed Tasks</p>
            </div>
          }
        </div>
        <br />
        <div className="tasklist-footer">
          {
            this.props.taskList.isActive &&
            <TaskFormComponent addTask={this.addTask} />
          }
        </div>
        <br />
      </div>
    );
  }
}

TaskListComponent.displayName = 'TaskListComponent';

// Uncomment properties you need
// TaskListComponent.propTypes = {};
// TaskListComponent.defaultProps = {};

export default TaskListComponent;

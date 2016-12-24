'use strict';

import React from 'react';

require('styles//TaskForm.css');

class TaskFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskTitle: null,
      taskDescription: null
    };
    this.titleChange = this.titleChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  titleChange(e) {
    let taskTitle = e.target.value;
    this.setState({taskTitle: taskTitle});
  }

  descriptionChange(e) {
    let taskDescription = e.target.value;
    this.setState({taskDescription: taskDescription});
  }

  clearFields() {
    let taskTitleInput, taskDescriptionTextarea;
    taskTitleInput = document.querySelector('#taskTitleInput');
    taskDescriptionTextarea = document.querySelector('#taskDescriptionTextarea');
    taskTitleInput.value = null;
    taskDescriptionTextarea.value = null;
  }

  render() {
    return (
      <div className="taskform-component">
        <div className="taskform-form">
          <label className="label">Task Name</label>
          <p className="control">
            <input id="taskTitleInput" className="input" type="text" placeholder="Text input" onChange={this.titleChange} />
          </p>
          <label className="label">Task Description</label>
          <p className="control">
            <textarea id="taskDescriptionTextarea" className="textarea" type="text" placeholder="Text area" onChange={this.descriptionChange}></textarea>
          </p>
        </div>
        <br />
        <div className="taskform-buttons columns has-text-centered">
          <div className="column">
            <a className="button is-danger is-medium" onClick={this.clearFields}>Clear Fields</a>
          </div>
          <div className="column">
            <a className="button is-primary is-medium" onClick={() => {this.props.addTask(this.state)}}>Add Task</a>
          </div>
        </div>
      </div>
    );
  }
}

TaskFormComponent.displayName = 'TaskFormComponent';

// Uncomment properties you need
// TaskFormComponent.propTypes = {};
// TaskFormComponent.defaultProps = {};

export default TaskFormComponent;

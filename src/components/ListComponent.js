'use strict';


import React from 'react';
import ListItemComponent from './ListItemComponent.js';
import ListFormComponent from './ListFormComponent.js';
import {VelocityTransitionGroup} from 'velocity-react';

require('styles//List.css');

class ListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formIsActive: false
    }
    this.toggleTaskList = this.toggleTaskList.bind(this);
    this.toggleListForm = this.toggleListForm.bind(this);
  }

  toggleTaskList(index) {
    let taskList = this.props.taskLists[index];
    taskList.isActive = !taskList.isActive;
    this.props.updateTaskList(index, taskList);
  }

  renderActiveTaskLists() {
    let activeTaskLists, activeTaskListElements;
    activeTaskLists = this.props.taskLists.filter((taskList) => {
      return taskList.isActive;
    });

    activeTaskListElements = this.renderTaskLists(activeTaskLists);

    return (
      <VelocityTransitionGroup enter={{animation: 'slideDown'}} leave={{animation: 'slideUp'}}>
        {activeTaskListElements}
      </VelocityTransitionGroup>
    );
  }

  renderInactiveTaskLists() {
    let inactiveTaskLists, inactiveTaskListElements;
    inactiveTaskLists = this.props.taskLists.filter((taskList) => {
      return !taskList.isActive;
    });

    inactiveTaskListElements = this.renderTaskLists(inactiveTaskLists);

    return (
      <VelocityTransitionGroup enter={{animation: 'slideDown'}} leave={{animation: 'slideUp'}}>
        {inactiveTaskListElements}
      </VelocityTransitionGroup>
    );
  }

  renderTaskLists(taskLists) {
    return taskLists.map((task) => {
          return (
            <ListItemComponent key={task.id} id={task.id} listName={task.listTitle} isActive={task.isActive} toggleTaskList={this.toggleTaskList} setSelectedTaskList={this.props.setSelectedTaskList} />
          );
    });
  }

  toggleListForm() {
    let formIsActive = this.state.formIsActive;
    this.setState({
      formIsActive: !formIsActive
    });
  }

  render() {
    return (
      <div className="list-component">
        <div className="list-header has-text-centered">
          <h1 className="title is-1">Lait</h1>
          <h3 className="title is-3">Smart tasklists</h3>
          <br />
        </div>
        <div className="list-body">
          <aside className="menu">
            <p className="menu-label">
              Active Lists
            </p>
            <ul className="menu-list">
              {this.renderActiveTaskLists()}
            </ul>
            <p className="menu-label">
              Deleted Lists
            </p>
            <ul className="menu-list">
              {this.renderInactiveTaskLists()}
            </ul>
            <ul className="menu-list">
              <li className="menu-item">
                {
                  this.state.formIsActive ?
                  <ListFormComponent toggleListForm={this.toggleListForm} addTaskList={this.props.addTaskList} /> :
                  <a className="is-medium" onClick={this.toggleListForm}>
                    Add Tasklist
                    <span className="is-pulled-right"><i className="fa fa-plus fa-lg" aria-hidden="true"></i></span>
                  </a>
                }
              </li>
            </ul>
          </aside>
        </div>
      </div>
    );
  }
}

ListComponent.displayName = 'ListComponent';

// Uncomment properties you need
// ListComponent.propTypes = {};
// ListComponent.defaultProps = {};

export default ListComponent;

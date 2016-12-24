require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TaskListComponent from './TaskListComponent.js';
import ListComponent from './ListComponent.js';
import FooterComponent from './FooterComponent.js';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskLists: [
        {
          id: 0,
          listTitle: 'Grocery List',
          tasks: [
            {id: 0, completed: false, title: 'Buy whole grain', description: 'Tomatoes are a good source of vitamin K!'},
            {id: 1, completed: true, title: 'Buy Rice', description: 'Rice is the perfect companion to any meal.'}
          ],
          isActive: true
        },
        {
          id: 1,
          listTitle: 'Just a Random List',
          tasks: [
            {id: 0, completed: false, title: 'Buy Tomatoes', description: 'Tomatoes are a good source of vitamin K!'},
            {id: 1, completed: true, title: 'Buy Rice', description: 'Rice is the perfect companion to any meal.'}
          ],
          isActive: false
        }
      ],
      presentedTaskList: {
        id: -1,
        listTitle: '-- No Tasklist --',
        tasks: [],
        isActive: false
      }
    };
    this.updateTaskList      = this.updateTaskList.bind(this);
    this.setSelectedTaskList = this.setSelectedTaskList.bind(this);
    this.addTaskList         = this.addTaskList.bind(this);
  }

  updateTaskList(index, newData) {
    let taskLists    = this.state.taskLists;
    taskLists[index] = newData;
    this.setState({taskLists: taskLists});
  }

  setSelectedTaskList(index) {
    let taskList = this.state.taskLists[index];
    this.setState({presentedTaskList: taskList});
  }

  addTaskList(title) {
    console.log('addTaskList()', title);
    let taskLists, taskListId;
    taskLists = this.state.taskLists;
    taskListId = taskLists.length;
    taskLists.push({
      id: taskListId,
      listTitle: title,
      tasks: [],
      isActive: true
    });
    this.setState({
      taskLists: taskLists
    });
  }

  render() {
    return (
      <div className="index">
        <div className="container">
          <div className="columns">
            <div className="column">
              <ListComponent taskLists={this.state.taskLists} updateTaskList={this.updateTaskList} setSelectedTaskList={this.setSelectedTaskList} addTaskList={this.addTaskList} />
            </div>
            <div className="column is-three-quarters">
              <TaskListComponent taskList={this.state.presentedTaskList} />
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

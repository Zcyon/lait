'use strict';

import React from 'react';

require('styles//TaskItem.css');

let TaskItemComponent = (props) => (
    <div className="taskitem-component">
      <div className="box">
        <div className="columns">
          <div className="column is-two-thirds">
            <h3 className="title is-3">{props.taskTitle}</h3>
            <h5 className="subtitle is-5">{props.taskDescription}</h5>
          </div>
          <div className="column">
            <a className="button is-pulled-right" onClick={() => {props.toggleTask(props.id);}}><i className={props.isCompleted ? 'fa fa-undo' : 'fa fa-check'} aria-hidden="true"></i></a>
            <a className="button is-pulled-right" onClick={() => {props.toggleModal(props.id);}}><i className="fa fa-trash-o" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <br />
    </div>
);

TaskItemComponent.displayName = 'TaskItemComponent';

// Uncomment properties you need
// TaskItemComponent.propTypes = {};
// TaskItemComponent.defaultProps = {};

export default TaskItemComponent;

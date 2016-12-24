'use strict';

import React from 'react';

require('styles//ListForm.css');

class ListFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.addTaskList = this.addTaskList.bind(this);
  }

  addTaskList() {
    let titleInput, title;
    titleInput = document.querySelector('#listTitleInput');
    title = titleInput.value === '' ? 'No name' : titleInput.value;
    this.props.addTaskList(title);
    this.props.toggleListForm();
  }

  render() {
    return (
      <div className="listform-component">
        <label className="label">Tasklist Name</label>
        <p className="control">
          <input id="listTitleInput" className="input" type="text" placeholder="" />
        </p>
        <div className="columns">
          <div className="column">
            <a className="button is-danger" onClick={this.props.toggleListForm}>Cancel</a>
          </div>
          <div className="column">
            <a className="button is-primary" onClick={this.addTaskList}>Add</a>
          </div>
        </div>
      </div>
    );
  }
}

ListFormComponent.displayName = 'ListFormComponent';

// Uncomment properties you need
// ListFormComponent.propTypes = {};
// ListFormComponent.defaultProps = {};

export default ListFormComponent;

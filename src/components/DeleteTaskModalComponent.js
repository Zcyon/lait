'use strict';

import React from 'react';

require('styles//DeleteTaskModal.css');

let DeleteTaskModalComponent = (props) => (
  <div id="modalConfirm" className="modal is-active">
    <div className="modal-background" onClick={props.toggleModal}>
    </div>
    <div className="modal-content">
      <div className="card is-fullwidth">
        <div className="card-content">
          <div className="content">
            <h2 className="title is-2">Are you sure you want to delete this task?</h2>
            <br />
            <div className="columns has-text-centered">
              <div className="column">
                <a className="button is-danger is-medium" onClick={props.toggleModal}>No, I take it back!</a>
              </div>
              <div className="column">
                <a className="button is-primary is-medium" onClick={props.deleteTask}>Yes, delete this task</a>
              </div>
            </div>
            <div className="has-text-centered">
              <small>(You can't undo this action)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="modal-close" onClick={props.toggleModal}></button>
  </div>
);

DeleteTaskModalComponent.displayName = 'DeleteTaskModalComponent';

// Uncomment properties you need
// DeleteTaskModalComponent.propTypes = {};
// DeleteTaskModalComponent.defaultProps = {};

export default DeleteTaskModalComponent;

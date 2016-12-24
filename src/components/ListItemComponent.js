'use strict';

import React from 'react';

require('styles//ListItem.css');

let ListItemComponent = (props) => (
  <li className="listitem-component menu-item" onClick={() => {props.setSelectedTaskList(props.id);}}>
    <a className="is-medium">
      {props.listName}
      {
        props.isActive ? <span className="is-pulled-right" onClick={() => {props.toggleTaskList(props.id)}}>Delete</span> :
        <span className="is-pulled-right" onClick={() => {props.toggleTaskList(props.id);}}>Recover</span>
      }
    </a>
  </li>
);

ListItemComponent.displayName = 'ListItemComponent';

// Uncomment properties you need
// ListItemComponent.propTypes = {};
// ListItemComponent.defaultProps = {};

export default ListItemComponent;

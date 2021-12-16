import React from 'react';
import { Link } from 'react-router-dom';

export var DialogsItem = function (props) {
  return <div><Link to={`/dialogs/${props.id}`}>{props.name}</Link></div>;
};

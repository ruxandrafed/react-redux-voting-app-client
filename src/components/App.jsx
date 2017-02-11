import React from 'react';
import {List} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {pair: pair});
  }
});

/* This component does nothing except render its child components,
 expected to be given in as the children prop. This is something
 that the react-router package does for us. It plugs in the
 component(s) defined for whatever the current route happens to be. */
import React from 'react';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default React.createClass({
  render: function() {
    return React.cloneElement(this.props.children, {
      pair: pair,
      tally: tally
    });
  }
});

/* This component does nothing except render its child components,
 expected to be given in as the children prop. This is something
 that the react-router package does for us. It plugs in the
 component(s) defined for whatever the current route happens to be. */
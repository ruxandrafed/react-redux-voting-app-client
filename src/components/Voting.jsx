import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});

/* If we only use immutable data in component props, and
write the component as a pure component, we can have React
use a more efficient strategy for detecting changes in
the props.

This is done by applying the PureRenderMixin that
is available as an add-on package. When this mixin is added to
a component, it changes the way React checks for changes in the
component's props (and state). Instead of a deep compare it does
a shallow compare, which is much, much faster.

The reason we can do this is that by definition, there can never
be changes within immutable data structures. If the props of a
component are all immutable values, and the props keep pointing
to the same values between renders, there can be no reason to
re-render the component, and it can be skipped completely.
.*/
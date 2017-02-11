import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Winner from './Winner';
import Vote from './Vote';

export const Voting = React.createClass({
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

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    winner: state.get('winner')
  };
}

/* With react-redux we get a function called connect that can do the
wiring-up of a component. It takes a mapping function as an argument
and returns another function that takes a React component class.

The role of the mapping function is to map the state from the Redux Store
into an object of props. Those props will then be merged into the props
of the component that's being connected. In the case of Voting, we just
need to map the pair and winner from the state. */

export const VotingContainer = connect(mapStateToProps)(Voting);

/* True to functional style, the connect function doesn't actually go and
mutate the Voting component. Voting remains a pure, unconnected component.
Instead, connect returns a connected version of Voting. That means our
current code isn't really doing anything. We need to grab that return
value, which we'll call VotingContainer.

The module now exports two components: The pure component Voting and the
connected component VotingContainer. The react-redux documentation calls
the former a "dumb" component and the latter a "smart" component.
I prefer "pure" and "connected".

The pure/dumb component is fully driven by the props it is given. It is
the component equivalent of a pure function.

The connected/smart component, on the other hand, wraps the pure version
with some logic that will keep it in sync with the changing state of the
Redux Store. That logic is provided by react-redux. */


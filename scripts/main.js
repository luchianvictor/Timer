var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;

var Testing = React.createClass({

  render: function() {
    return (
      <p>Salut, testing</p>
    );
  }

});

ReactDOM.render(<Testing />,document.querySelector('#main'));

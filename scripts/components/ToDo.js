var React = require('react');

var ToDo = React.createClass({

  render: function() {
    var {id,text} = this.props;
    return (
      <p>{id}.{text}</p>
    );
  }

});

module.exports = ToDo;

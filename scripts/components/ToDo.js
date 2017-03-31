var React = require('react');

var ToDo = React.createClass({

  render: function() {
    var {id, text, completed} = this.props;
    return (
      <div onClick={() => {
          this.props.onToggle(id);
        }}>
        {id}.{text}<input type="checkbox" checked={completed} />
      </div>

    );
  }

});

module.exports = ToDo;

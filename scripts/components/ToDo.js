var React = require('react');

var ToDo = React.createClass({

  render: function() {
    var {id, text, completed} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    return (
      <div>
        <input type="checkbox" checked={completed} onChange={() => {this.props.onToggle(id);}}/>
        {text}
        <button onClick={() => {this.props.onClick(id)}}>Delete</button>
      </div>

    );
  }

});

module.exports = ToDo;

var React = require('react');


var AddToDo = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var task = this.refs.enteredTask.value;
    if (task.length > 0) {
      this.refs.enteredTask.value = '';
      this.props.handleAddTodo(task);
    } 
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="Add a task" ref="enteredTask"/>
        <button type="submit">Add</button>

      </form>
    );
  }

});

module.exports = AddToDo;

var React = require('react');
var ToDo = require('./ToDo');

var ToDoList = React.createClass({

  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container_message">Nothing to do</p>
        );
      }
      return todos.map((todo) => {
        return <ToDo key={todo.id} {...todo} onToggle={this.props.onToggle}  onClick={this.props.removeItem}/>
      })
    };
    return (
      <div className="todoList">
        {renderTodos()}
      </div>
    );
  }

});

module.exports = ToDoList;

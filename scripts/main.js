var React = require('react');
var ReactDOM = require('react-dom');

var ToDoList = require('./components/ToDoList');
var AddToDo = require('./components/AddToDo')
var ToDoSearch = require('./components/ToDoSearch');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: "",
      todos: [
        {
          id: 1,
          text:"hai noroc",
          completed: false
        },
        {
          id:2,
          text:"salucea",
          completed: false
        },
        {
          id:3,
          text:"ba uratule",
          completed: true
        }
      ]
    };
  },
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map(function(todo) {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({
      todos:updatedTodos
    })
  },
  handleAddTodo: function(todo) {

    var item = {};
    item.id = this.state.todos.length+1;
    item.text = todo;
    var todos = this.state.todos;
    todos.push(item);
    this.setState({
      todos:this.state.todos
    });
  },
  handleOnSearch: function(showCompleted,searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <ToDoSearch onSearch={this.handleOnSearch} />

        <ToDoList todos={todos} onToggle={this.handleToggle}/>
        <AddToDo handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }

});

ReactDOM.render(<ToDoApp />,document.querySelector('#main'));

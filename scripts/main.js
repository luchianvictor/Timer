var React = require('react');
var ReactDOM = require('react-dom');

var ToDoList = require('./components/ToDoList');
var AddToDo = require('./components/AddToDo')
var ToDoSearch = require('./components/ToDoSearch');
var TodoAPI = require('./api/TodoAPI');

var ToDoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: "",
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
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
    item.id = (new Date()).getTime();
    item.text = todo;
    item.completed = false;
    var todos = this.state.todos;
    todos.push(item);
    this.setState({
      todos:this.state.todos
    });
  },
  handleSearch: function(showCompleted,searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function() {
    var {todos,showCompleted,searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div>
        <h1>Todo app</h1>
        <ToDoSearch onSearch={this.handleSearch} />

        <ToDoList todos={filteredTodos} onToggle={this.handleToggle}/>
        <AddToDo handleAddTodo={this.handleAddTodo} />
      </div>
    );
  }

});

ReactDOM.render(<ToDoApp />,document.querySelector('#main'));

var React = require('react');
var ReactDOM = require('react-dom');

var ToDoList = require('./components/ToDoList')

var Testing = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text:"hai noroc"
        },
        {
          id:2,
          text:"salucea"
        }
      ]
    };
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <p>Salut, testing</p>
        <ToDoList todos={todos} />

      </div>
    );
  }

});

ReactDOM.render(<Testing />,document.querySelector('#main'));

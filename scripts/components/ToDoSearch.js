var React = require('react');
var PropTypes = React.PropTypes;

var ToDoSearch = React.createClass({
  handleSearch: function() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;
    this.props.onSearch(showCompleted,searchText);
  },
  render: function() {
    return (
      <div>
      <div>
        <input type="search" ref="searchText" placeholder="search todos" onChange={this.handleSearch} />
      </div>
      <div>
        <label >
          <input type="checkbox" ref="showCompleted" id="todo" onChange={this.handleSearch}  />
          Show complete todos
        </label>
      </div>

      </div>
    );
  }

});

module.exports = ToDoSearch;

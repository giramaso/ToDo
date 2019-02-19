import React from "react";
import ReactDOM from "react-dom";

import TodoItem from "./todo-item";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: []
    };
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, document.getElementById("add").value]
    });
    document.getElementById("add").value = "";
  };

  renderTodos = () => {
    return this.state.todos.map((item, index) => {
      return <TodoItem title={item} key={index} />;
    });
  };

  render() {
    return (
      <div className="app">
        <h1>ToDo List</h1>
        <div className="add-todo">
          <input type="text" placeholder="Add ToDo" id="add" />
          <button onClick={() => this.addTodo()}>Add</button>
        </div>
        {this.renderTodos()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

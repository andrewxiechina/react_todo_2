import React, {Component} from 'react';
import '../styles/todo.css';

import TodoInput from '../components/todo/TodoInput';
import TodoList from '../components/todo/TodoList';
import TodoFilter from '../components/todo/TodoFilter';

class TodoPage extends Component{
  constructor() {
    super();
    this.state = {
      filter: "ALL",
      todo: "",
      todos:[
        {
          id: 1,
          content: "Buy birthday gift for my girl.",
          completed: true,
        },
        {
          id: 2,
          content: "Call my girl and tell her I love her.",
          completed: false,
        },
        {
          id: 3,
          content: "Wake up early.",
          completed: false,
        },
        {
          id: 4,
          content: "Be bright, be early.",
          completed: false,
        },
      ]
    };
  }
  toggleTodo(id) {
    var newTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        return {...todo, completed: !todo.completed};
      }else{
        return todo;
      }
    })

    this.setState({
      todos: newTodos,
    })
  }
  updateTodo(id, content){
    var newTodos = this.state.todos.map((todo) => {
      if(todo.id === id){
        return {...todo, content: content};
      }else{
        return todo;
      }
    })

    this.setState({
      todos: newTodos,
    })
  }
  deleteTodo(id){
    var newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: newTodos,
    })
  }
  addTodo(content) {
    this.setState({
      todos: [...this.state.todos, {
        id: new Date(),
        content: content,
        completed: false,
      }]
    });
  }

  updateFilter(filter) {
    if(this.state.filter !== filter) {
      this.setState({
        filter: filter
      })
    }
  }

  getFilteredTodos() {
    return this.state.todos.filter((todo) => {
      switch (this.state.filter) {
        case "ACTIVE":
          return todo.completed === false;
          break;
        case "COMPLETED":
          return todo.completed === true;
          break;
        default:
          return true;

      }
    })
  }
  render() {
    return (
      <div className="todoapp">
        <TodoInput addTodo={(content) => {this.addTodo(content)}}/>
        <TodoList
          todos={this.getFilteredTodos()}
          toggleTodo={(id) => this.toggleTodo(id)}
          deleteTodo={(id) => {this.deleteTodo(id) }}
          updateTodo={(id, content) => { this.updateTodo(id, content)}}
          />

        <footer className="footer">
          <span className="todo-count">
            <strong>{this.state.todos.length}</strong><span> items left</span>
          </span>
          <TodoFilter filter={this.state.filter} updateFilter={ (filter) => {this.updateFilter(filter) }}/>
        </footer>
      </div>
    );
  }
};


export default TodoPage

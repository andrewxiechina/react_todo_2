import React, {Component} from 'react';

export default class TodoList extends Component {
  render() {
    return (

      <section className="main">
        <input className="toggle-all" type="checkbox"/>

        <ul className="todo-list">
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              <div className="view">
                <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => {this.props.toggleTodo(todo.id)}}/>
                <label>{todo.content}</label>
                <button
                  className="destroy"
                  onClick={() => { this.props.deleteTodo(todo.id) }}
                  />
              </div>
              <input
    						ref="editField"
    						className="edit"
    					/>
            </li>
          ))}

        </ul>
      </section>
    )
  }
}

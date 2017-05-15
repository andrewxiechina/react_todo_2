import React, {Component} from 'react';
const ENTER_KEY = 13;

export default class TodoInput extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  handleChange(e) {
    this.setState(
      {
        value: e.target.value
      }
    );
  }

  handleKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) {
				return;
			}

			event.preventDefault();

      var val = this.state.value.trim();

			if (val) {
				this.props.addTodo(val);
				this.setState({
          value: '',
        })
			}
  }
  render() {
    return (
      <header>
        <h1>todos</h1>
        <input
          className="new-todo"
          type="text"
          value={this.state.value}
          onChange={(e) => { this.handleChange(e) }}
          onKeyDown={(e) => { this.handleKeyDown(e) }}
          />
      </header>
    )
  }
}

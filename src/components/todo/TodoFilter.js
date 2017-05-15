import React, {Component} from 'react';

export default class TodoFilter extends Component {
  render() {
    return (
      <ul className="filters">
        <li>
          <a href="#/"
              className={this.props.filter==="ALL" ? "selected" : ""}
              onClick={() => { this.props.updateFilter("ALL") }}>
            All
          </a>
        </li>
        <li>
          <a href="#/"
              className={this.props.filter==="ACTIVE" ? "selected" : ""}
              onClick={() => { this.props.updateFilter("ACTIVE") }}>
                Active
          </a>
        </li>
        <li>
          <a href="#/"
            className={this.props.filter==="COMPLETED" ? "selected" : ""}
            onClick={() => { this.props.updateFilter("COMPLETED") }}>
            Completed
          </a>
        </li>
      </ul>
    )
  }
}

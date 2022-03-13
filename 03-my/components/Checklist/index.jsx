import React, { Component } from "react";

export default class Checklist extends Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          checked={this.props.allCheck}
          onChange={e => { this.props.changeAll(e.target.checked) }}
        />
        Done {this.props.doneCount}/ All {this.props.allCount}
      </div>
    );
  }
}

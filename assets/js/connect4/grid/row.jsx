import React from 'react';
import Col from './col.jsx';

export default class extends React.Component {
  static propTypes: {
    cols: React.PropTypes.array,
    row: React.PropTypes.number
  };

  render() {
    return (
      <tr>
        {this.cells(this.props.cols)}
      </tr>
    )
  }

  cells(cols) {
    let cells = [];

    for (let [col, cell] of cols.entries()) {
      cells.push(
        <Col key={col} cell={cell} col={col} row={this.props.row} />
      );
    }

    return cells;
  }
}

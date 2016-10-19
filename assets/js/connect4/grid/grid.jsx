import React from 'react';
import Row from './row.jsx';

export default class extends React.Component {
  static propTypes: {
    currentPlayer: React.PropTypes.number,
    map: React.PropTypes.array
  };

  render() {
    return (
      <table className="connect4-grid" data-current-player={this.props.currentPlayer}>
        <tbody>
          {this.grid(this.props.map)}
        </tbody>
      </table>
    )
  }

  grid(map) {
    let grid = [];

    for (let [row, cols] of map.entries()) {
      grid.push(
        <Row key={row} cols={cols} row={row} />
      );
    }

    return grid;
  }
}

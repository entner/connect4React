import React from 'react';

export default class extends React.Component {
  static propTypes: {
    cell: React.PropTypes.array,
    col: React.PropTypes.number,
    row: React.PropTypes.number,
    onclick: React.PropTypes.func
  };

  render() {
    return (
      <td data-player={this.props.cell.player} onClick={this.clickHandler.bind(this)}> </td>
    )
  }

  clickHandler() {
    if (typeof this.props.cell.dropDisc === 'function') {
      this.props.cell.dropDisc(this.props.row, this.props.col);
    }
  }
}

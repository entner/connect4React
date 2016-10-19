import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './grid/grid.jsx';
import Players from './player/players.jsx';

/*
 * TODO
 * - calculate winner
 * - drop animation
 * - dynamic cell size depending on number of cells and window size
 */
export default class Connect4 extends React.Component {
  static propTypes: {
    cols: React.PropTypes.number,
    rows: React.PropTypes.number
  };

  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: 1,
      gridMap: []
    };
  }

  componentDidMount() {
    this.createGridMap();
  }

  render() {
    return (
      <div className="connect4">
        <button onClick={this.createGridMap.bind(this)}>Restart</button>
        <Players currentPlayer={this.state.currentPlayer}/>
        <Grid currentPlayer={this.state.currentPlayer} map={this.state.gridMap} />
      </div>
    )
  }

  createGridMap() {
    let gridMap = [];

    for (let i = 0; i < this.props.rows; i++) {
      gridMap[i] = [];
      for (let j = 0; j < this.props.cols; j++) {
        gridMap[i][j] = {
          player: 0,
          dropDisc: this.dropDisc.bind(this)
        };
      }
    }

    this.setState({gridMap: gridMap});
  }

  updateGridMap(row, col, player) {
    // Note: implicitely removed the clickHandler (dropDisc) from this cell
    this.state.gridMap[row][col] = {player: player};
    this.setState({gridMap: this.state.gridMap});
  }

  dropDisc(row, col) {
    let targetRow = null;

    while (row < this.props.rows && this.state.gridMap[row][col].player === 0) {
      targetRow = row;
      row++;
    }

    if (targetRow !== null) {
      this.updateGridMap(targetRow, col, this.state.currentPlayer);
      this.switchPlayer();
    }
  }

  switchPlayer() {
    this.setState({currentPlayer: this.state.currentPlayer === 1 ? 2 : 1});
  }
}

ReactDOM.render(
  React.createElement(Connect4, {rows: 6, cols: 7}),
  document.getElementById('connect4')
);

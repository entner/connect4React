import React from 'react';
import Player from './player.jsx';

export default class extends React.Component {
  static propTypes: {
    currentPlayer: React.PropTypes.number
  };

  render() {
    return (
      <div className="players">
        <Player player="1" isCurrentPlayer={this.isCurrentPlayer(1)}/>
        <Player player="2" isCurrentPlayer={this.isCurrentPlayer(2)}/>
      </div>
    )
  }

  isCurrentPlayer(player) {
    return player === this.props.currentPlayer;
  }
}


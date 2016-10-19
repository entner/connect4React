import React from 'react';

export default class extends React.Component {
  static propTypes: {
    isCurrentPlayer: React.PropTypes.bool
  };

  render() {
    return (
      <div className={this.getClassNames()}>
        Player {this.props.player}
      </div>
    )
  }

  getClassNames() {
    let classNames = 'player player' + this.props.player;

    if (this.props.isCurrentPlayer) {
      classNames += ' active';
    }

    return classNames;
  }
}
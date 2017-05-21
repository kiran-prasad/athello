import React, {PureComponent, PropTypes} from 'react';

class Square extends PureComponent {

  static PropTypes = {
    row: PropTypes.number,
    column: PropTypes.column,
    onClickSquare: PropTypes.func,
    validMoves: PropTypes.array,
    player: PropTypes.number
  };

  onClickSquare = () => {
    const {props} = this;

    props.onClickSquare( props.row, props.column );
  };

  render() {
    const {props} = this,
      {row, column} = props,
      isValidMove = props.validMoves.find( move => move.x === row && move.y === column ),
      disc = props.player === 1 ? <div className="disc player-black"></div> : (props.player === -1 ? <div className="disc player-white"></div> : '');

    return (
      <div className="tile-item" onClick={this.onClickSquare}>
        {disc}
        {isValidMove && <div className="valid-move-mark">X</div>}
      </div>
    );
  }
}

module.exports = Square;

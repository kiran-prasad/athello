import React, {PureComponent, PropTypes} from 'react';
import Row from './BoardRow';

class Board extends PureComponent {

  static PropTypes = {
    board: PropTypes.array,
    validMoves: PropTypes.array,
    currentPlayer: PropTypes.string
  };

  makeMove = () => {
    const {props} = this;

    props.actions.skipMove( props.currentPlayer );
  };

  render() {
    const {props} = this,
      rows = props.board.map( ( row, rowId ) => <Row key={rowId} row={row} rowIndex={rowId}
                                                     onClickSquare={props.actions.makeMove}
                                                     validMoves={props.validMoves}/> );

    return (
      <div className="boardContainer full-height">
        {rows}
      </div>
    );
  }
}

module.exports = Board;

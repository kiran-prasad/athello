import React, {PureComponent, PropTypes} from 'react';
import Square from './Square';

const Row = ( props ) => {
  return (
    <div className="board-row">
      { props.row.map( ( player, column ) => <Square key={column} row={props.rowIndex} column={column} validMoves={props.validMoves}
                                                     player={player}  onClickSquare={props.onClickSquare}/> ) }
    </div>
  )
};

module.exports  = Row;

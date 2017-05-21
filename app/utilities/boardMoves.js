import {BOARD_SIZE} from '../constants/boardConfig';
import {PLAYER} from '../constants/player';
import update from 'immutability-helper';


const boardSize = BOARD_SIZE - 1;

function makeMove( x, y, board, currentPlayer ) {
    return moveInAllDirections( x, y, board, currentPlayer );
}

function isValidPoint( x, y ) {
  return (0 <= x && x <= boardSize) && (0 <= y && y <= boardSize);
}

function getValidMoves( board, currentPlayer ) {
  const allValidMoves = [];
  board.forEach( ( row, rowIndex ) => {
    row.forEach( ( column, columnIndex ) => {
      let validMovesFromPoint = [];
      if(board[rowIndex][columnIndex] === 0){
        validMovesFromPoint = moveInAllDirections( columnIndex, rowIndex, board, currentPlayer );
        if(validMovesFromPoint[0]){
          allValidMoves.push({x: rowIndex, y: columnIndex});
        }
      }
    } );
  } );
  return allValidMoves;
}

function moveInAllDirections( x, y, board, currentPlayer ) {
  const moves = getPossibleMovesFromPoint(),
    pointsToReverse = [];

  moves.forEach( move => {
    let nextPoint = move( { x, y } ),
      tilesMoved = [];

    while ( isValidPoint( nextPoint.x, nextPoint.y, board ) ) {
      const pointBelongsToPlayer = board[ nextPoint.y ][ nextPoint.x ];
      if ( pointBelongsToPlayer === -currentPlayer ) {
        tilesMoved.push( nextPoint );
        nextPoint = move( nextPoint );
      } else if ( pointBelongsToPlayer === currentPlayer ) {
        return pointsToReverse.push( ...tilesMoved );
      } else {
        return [];
      }
    }
  } );
  return pointsToReverse;
}

function getPossibleMovesFromPoint() {
  return ([
    p => ({ x: p.x, y: p.y - 1 }),
    p => ({ x: p.x, y: p.y + 1 }),
    p => ({ x: p.x - 1, y: p.y }),
    p => ({ x: p.x + 1, y: p.y }),
    p => ({ x: p.x - 1, y: p.y - 1 }),
    p => ({ x: p.x + 1, y: p.y - 1 }),
    p => ({ x: p.x - 1, y: p.y + 1 }),
    p => ({ x: p.x + 1, y: p.y + 1 })
  ]);
}

export default {
  makeMove,
  getValidMoves
}
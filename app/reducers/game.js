import {PLAYER} from '../constants/player'
import {BOARD_CONFIG, BOARD_SIZE} from '../constants/boardConfig'
import BoardUtil from '../utilities/boardMoves';

const boardSquares = BOARD_SIZE * BOARD_SIZE;

function initialState() {
  return {
    currentPlayer: PLAYER.BLACK,
    board: BOARD_CONFIG,
    validMoves: BoardUtil.getValidMoves( BOARD_CONFIG, PLAYER.BLACK ),
    playerScores: {
      [PLAYER.BLACK]: 2,
      [PLAYER.WHITE]: 2
    },
    showInvalidMoveError: false,
    squaresFlipped: 4
  }
}

function skipMove( state ) {
  const nextPlayer = -state.currentPlayer,
    nextValidMoves = BoardUtil.getValidMoves( state.board, nextPlayer );

  return {
    ...state,
    currentPlayer: nextPlayer,
    validMoves: nextValidMoves
  }
}

const makeMove = function ( state = initialState(), action ) {
  const {currentPlayer, board, playerScores} = state,
    pointsToReverse = BoardUtil.makeMove( action.col, action.row, board, currentPlayer );
  let {validMoves, squaresFlipped, hasGameFinished} = state,
    nextPlayer = currentPlayer,
    newScores = playerScores,
    showInvalidMoveError = false;

  if ( board[ action.row ][ action.col ] !== 0 ) {
    return state;
  }
  if ( pointsToReverse[ 0 ] ) {
    pointsToReverse.forEach( point => {
      board[ point.y ][ point.x ] = currentPlayer;
    } );
    board[ action.row ][ action.col ] = currentPlayer;
    nextPlayer = -currentPlayer;
    validMoves = BoardUtil.getValidMoves( board, -currentPlayer );
    newScores = Object.assign( {}, {
      [currentPlayer]: playerScores[ currentPlayer ] + pointsToReverse.length + 1,
      [nextPlayer]: playerScores[ nextPlayer ] - pointsToReverse.length
    } );
    squaresFlipped = squaresFlipped + 1;
  } else {
    showInvalidMoveError = true;
  }
  if ( squaresFlipped === boardSquares ) {
    hasGameFinished = true;
  }

  return {
    board,
    validMoves,
    squaresFlipped,
    hasGameFinished,
    showInvalidMoveError,
    currentPlayer: nextPlayer,
    playerScores: newScores
  };
};

const boardApp = function ( state = initialState(), action ) {
  if ( action.type === 'MAKE_MOVE' ) {
    return makeMove( state, action );
  }
  if ( action.type === 'SKIP_MOVE' ) {
    return skipMove( state, action );
  }
  return state;
};

export default boardApp;

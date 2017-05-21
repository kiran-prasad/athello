import React, {PureComponent, PropTypes} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/appActions'
import {PLAYER} from '../constants/player'

let PlayerScore = ( props ) => {
  const isCurrentPlayerBlack = props.currentPlayer === PLAYER.BLACK,
    blackScore = props.playerScores[ PLAYER.BLACK ],
    whiteScore = props.playerScores[ PLAYER.WHITE ],
    winnerMessage = `Game Over. ${blackScore > whiteScore ? 'Black' : 'White'} won the game`,
    blackClass = `player-info ${!isCurrentPlayerBlack && 'l-margin'}`,
    whiteClass = `player-info ${isCurrentPlayerBlack && 'l-margin'}`;

  return (
    <div className="score-container">
      {props.hasGameFinished && <div className="game-over-text">{winnerMessage}</div>}
      {props.showInvalidMoveError && <div className="error-msg">Invalid move. Please choose another square.</div>}
      <div className={blackClass}>{isCurrentPlayerBlack && '*'} Black ({blackScore})</div>
      <div className={whiteClass}>{!isCurrentPlayerBlack && '*'} White ({whiteScore})</div>
      <button className="skip-button" onClick={props.actions.skipMove}>SKIP</button>
    </div>
  )
};

PlayerScore = connect( state => state, dispatch => ({
  actions: bindActionCreators( actions, dispatch )
}) )( PlayerScore );

export default PlayerScore;
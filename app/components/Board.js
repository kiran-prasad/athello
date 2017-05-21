import React, {PureComponent, PropTypes} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/appActions'
import Row from './BoardRow';

class Board extends PureComponent {

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

export default connect( state => state, dispatch => ({
  actions: bindActionCreators( actions, dispatch )
}) )( Board )

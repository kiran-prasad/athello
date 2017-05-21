import React, {PureComponent, PropTypes} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/appActions'
import Board from './Board';

const mapStateToProps = (state) => {
  return {...state}
};

export default connect(mapStateToProps, dispatch => ({
  actions: bindActionCreators(actions, dispatch)
}))(Board)
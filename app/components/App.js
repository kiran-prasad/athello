import PropTypes from 'prop-types'
import React, {PureComponent} from 'react'
import BoardContainer from './BoardContainer'
import PlayerScore from './PlayerScore'

class App extends PureComponent {

  state = {windowHeight: window.innerHeight};

  updateDimensions = () => {
    this.setState({
      windowHeight: window.innerHeight
    });
  };

  componentDidMount(){
    window.addEventListener("resize", this.updateDimensions);
  }

  render(){
    return(
      <div className="app-container" style={{ height: this.state.windowHeight, minWidth: 1000, minHeight: 500 }}>
        <BoardContainer />
        <PlayerScore/>
      </div>
    );
  }

}

export default App

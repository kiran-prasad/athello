import React, {PureComponent} from 'react'
import Board from './Board'
import PlayerScore from './PlayerScore';
import debounce from 'lodash.debounce';

class App extends PureComponent {

  state = { windowHeight: window.innerHeight };

  updateDimensions = () => {
    this.setState( {
      windowHeight: window.innerHeight
    } );
  };

  componentDidMount() {
    window.addEventListener( "resize", debounce(this.updateDimensions, 300) );
  }

  render() {
    return (
      <div className="app-container" style={{ height: this.state.windowHeight, minWidth: 1000, minHeight: 500 }}>
        <Board />
        <PlayerScore/>
      </div>
    );
  }

}

export default App

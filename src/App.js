import React, {Component} from 'react';
import {connect} from 'react-redux';

import Game from './modules/game';
import Score from './components/score';
import PlayBlock from './components/playBlock';
import Buttons from './components/buttons';

class App extends Component {
    constructor(props) {
        super(props);
		this.gameStart = this.gameStart.bind(this);
		this.gameStop = this.gameStop.bind(this);
    }

    componentDidMount() {
		this.game = new Game(this.props);
	}

	gameStart() {
		this.game.start();
	}

	gameStop() {
		this.game.stop();
	}

    render() {
        return (
            <div className="app">
                {<Score/>}
				{<PlayBlock/>}
				{<Buttons
                    startGame = {this.gameStart}
                    stopGame =  {this.gameStop}
                />}
            </div>
        )
    }
}

export default connect(
    state => ({
        eventList: state
    }),
    dispatch => ({
		addPoint: () => {
			dispatch({type: 'ADD_POINT'});
		},
		dropPoint: () => {
			dispatch({type: 'DROP_POINTS'});
		},
		dropCollection: () => {
			dispatch({type: 'DROP_COLLECTION'});
		},
		addBox: (data) => {
			dispatch({type: 'ADD_COLLECTION_ELEMENT', payload: data});
		},
		removeBox: (num) => {
			dispatch({type: 'REMOVE_COLLECTION_ELEMENT', payload: num});
		}
    })
)(App);
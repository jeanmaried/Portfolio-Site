import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/flex.css';
import Layout from '../page/Layout';
import '../styles/game.css'

class Spaceship extends Component {
	handleKeyPress = (e) => {
		let fly = document.getElementById("spaceship");
		console.log(e.key);
		if (e.key == "ArrowDown"){
			fly.style.top += 5 + "%";
		}
		else if(e.key == "ArrowUp"){
			fly.style.top += 5 + "%";
		}
		else if (e.key == "ArrowRight"){
			fly.style.right += 5 + "%";
		}
		else if (e.key == "ArrowLeft"){
			fly.style.left += 5 + "%";
		}
	}

	render(){
		return (
			<div id="spaceship" className="flex justify-center"></div>
		)
	}

	componentDidMount(){
		document.addEventListener("keydown", this.handleKeyPress)
	}
}

export default Spaceship;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../flex.css';
import Layout from '../page/Layout'

class Home extends Component {
  handleClick(){
    let station = document.getElementById("alien_station");
    if (station == null){
      //do nothing
    }
    else{
      let counter = 0;
      let i = setInterval(function(){
        let node = document.createElement("div");
        let random_alien = aliens[Math.floor(Math.random() * aliens.length)];
        let random_position = position[Math.floor(Math.random() * position.length)];
        node.classList.add(random_alien, random_position, "icons", "flex");
        station.appendChild(node);

        counter++;
        if (counter === 50){
          clearInterval(i);
        }
      }, 2000);
    }
  }

  render() {
    return (
      <div id="landing">
      <Layout>
        <div id="alien_station" className="flex direction-row"></div>
        <button className="random_button" onClick={this.handleClick}>LAUNCH</button>
        <div id="spaceship" className="flex justify-center">
          <img src={require('../assets/rocket.png')} alt=""/>
        </div>
        </Layout>
      </div>
    );
  }
}

export default Home;

let aliens = [
  "devicon-html5-plain",
  "devicon-css3-plain",
  "devicon-sass-plain",
  "devicon-javascript-plain",
  "devicon-jquery-plain",
  "devicon-wordpress-plain",
  "devicon-php-plain",
  "devicon-git-plain",
  "devicon-github-plain",
  "devicon-gulp-plain",
  "devicon-react-plain"
]

let position = [
  "margin1",
  "margin2",
  "margin3",
  "margin4",
  "margin5",
  "margin6",
  "margin7",
  "margin8",
  "margin9",
]
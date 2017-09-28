import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../flex.css';
import Layout from '../page/Layout'

class Rocket extends Component {
  handleClick(){
    document.getElementById("launch_button").remove();
    let station = document.getElementById("alien_station");
    if (station == null){
      //do nothing
    }
    else{
      let counter = 0;
      let i = setInterval(function(){
        let node = document.createElement("div");
        let random_alien = aliens[Math.floor(Math.random() * aliens.length)];
        // let random_position = position[Math.floor(Math.random() * position.length)];
        node.classList.add(random_alien, "position", "icons", "flex", "floating");
        station.appendChild(node);

        counter++;
        if (counter === 50){
          clearInterval(i);
        }
      }, 3000);
    }
  }

  render() {
    return (
      <Layout>
        <div id="alien_station" className="flex direction-row"></div>
        <div className="flex justify-center">
          <input id="launch_button" className="flex justify-center" type="submit" value="LAUNCH" onClick={this.handleClick}/>
        </div>
        <div id="spaceship" className="flex justify-center">
          <img src={require('../assets/rocket.png')} alt=""/>
        </div>
        </Layout>
    );
  }
}

export default Rocket;

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
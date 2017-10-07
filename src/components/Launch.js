import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Layout from '../page/Layout';
import '../styles/game.css';
import '../styles/flex.css';

class Rocket extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.countDown();
    let station = document.getElementById("alien_station");
    if (station == null){
      //do nothing
    }
    else{
      let counter = 0;
      let i = setInterval(function(){
        let node = document.createElement("div");
        let random_alien = aliens[Math.floor(Math.random() * aliens.length)];
        node.classList.add(random_alien, "position", "icons", "flex", "floating");
        station.appendChild(node);

        counter++;
        if (counter === 1000){
          clearInterval(i);
        }
      }, 1500);
    }
  }

  countDown(){
    let launch = document.getElementById("launch_button");
    let countdown = document.createElement("div")
    countdown.classList.add("countdown");

    var count = 5;
    function anim() {
        if (count > 0) {
          countdown.innerHTML= count;
          launch.replaceWith(countdown);
          count--;
          setTimeout(anim, 1000);
        }
        else if (count == 0){
          countdown.innerHTML= "TAKE OFF";
          count--;
          setTimeout(anim, 900);
        }
        else{
          countdown.parentNode.removeChild(countdown);
        }
    }
    anim();
  }

  render() {
    return (
      <div id="pane">
      <Layout>
          <div id="alien_station" className="flex direction-row"></div>
          <div className="flex justify-center">
            <div id="coming_soon" className="flex justify-center yellow">COMING SOON</div>
          {/* <input id="launch_button" className="flex justify-center" type="submit" value="LAUNCH" onClick={this.handleClick}/> */}
          </div>
        </Layout>
        </div>
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
import React, { Component } from 'react';
// import Layout from '../page/Layout';
import './styles.css';
// import '../styles/flex.css';

class Rocket extends Component {
//   componentDidMount = () => {
//     let station = document.getElementById("alien_station");
//     if (station == null){
//       //do nothing
//     }
//     else{
//       let counter = 0;
//       let i = setInterval(function(){
//         let node = document.createElement("div");
//         let random_alien = aliens[Math.floor(Math.random() * aliens.length)];
//         node.classList.add(random_alien, "position", "icons", "flex", "floating");
//         station.appendChild(node);

//         counter++;
//         if (counter === 35){
//           clearInterval(i);
//         }
//       }, 1500);
//     }
//   }

  render() {
    return (
    <div id="pane" className="white">
            <div className="position1"><i className="devicon-html5-plain"></i></div>
            <div className="position2"><i className="devicon-css3-plain"></i></div>
            <div className="position3"><i className="devicon-sass-plain"></i></div>
            <div className="position4"><i className="devicon-javascript-plain"></i></div>
            <div className="position5"><i className="devicon-jquery-plain"></i></div>
            {/* <div className="position1"><i className="devicon-wordpress-plain"></i></div>
            <div className="position2"><i className="devicon-php-plain"></i></div>
            <div className="position3"><i className="devicon-github-plain"></i></div>
            <div className="position4"><i className="devicon-gulp-plain"></i></div>
            <div className="position5"><i className="devicon-react-plain"></i></div>
            <div className="position1"><i className="devicon-mongodb-plain"></i></div>
            <div className="position2"><i className="devicon-nodejs-plain"></i></div>
            <div className="position3"><i className="devicon-express-original"></i></div>
            <div className="position4"><i className="devicon-postgresql-plain"></i></div>
            <div className="position5"><i className="devicon-meteor-plain"></i></div> */}
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

let position = ["10%", "20%", "30%", "40%", "50%", "60%"]
import React, { useState, useEffect } from "react";
import "./App.css";
import { Line, Doughnut, Graph } from "react-chartjs-2";
// import generator from "./assets/images/generator.gif";
import githubicon from "./assets/images/githubIcon.png";
import linkedin from "./assets/images/linkedin.png";
import Cameron from "./assets/images/Cameron.jpeg";
import Wayne from "./assets/images/Wayne.jpg";
import Garrett from "./assets/images/Garrett.jpg";
import Jeho from "./assets/images/Jeho.jpg";
import Eelan from "./assets/images/Eelan.jpg";
import WhiteLogo from "./assets/images/WhiteLogo.png";

function App() {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };
  const data2 = {
    labels: ["Red", "Green", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  // const [counter, setCounter] = useState({
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: "My First dataset",
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: "rgba(75,192,192,0.4)",
  //       borderColor: "rgba(75,192,192,1)",
  //       borderCapStyle: "butt",
  //       borderDash: [],
  //       borderDashOffset: 0.0,
  //       borderJoinStyle: "miter",
  //       pointBorderColor: "rgba(75,192,192,1)",
  //       pointBackgroundColor: "#fff",
  //       pointBorderWidth: 1,
  //       pointHoverRadius: 5,
  //       pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //       pointHoverBorderColor: "rgba(220,220,220,1)",
  //       pointHoverBorderWidth: 2,
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //       data: [65, 59, 80, 81, 56, 55, 40],
  //     },
  //   ],
  // });
  // useEffect(() => {
  //   setInterval(function () {
  //     var oldDataSet = counter.datasets[0];
  //     var newData = [];

  //     for (var x = 0; x < counter.labels.length; x++) {
  //       newData.push(Math.floor(Math.random() * 100));
  //     }

  //     var newDataSet = {
  //       ...oldDataSet,
  //     };

  //     newDataSet.data = newData;

  //     // var newState = {
  //     //   ...initialState,
  //     //   datasets: [newDataSet],
  //     // };

  //     setCounter(newData);
  //   }, 5000);
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={WhiteLogo} alt="osiris logo" style={{ height: "400px", width: "1200px" }} /> */}
        {/* <h2> UI Component Library | Generator | Page Builder</h2> */}
        <h2> Adam's Actuary Site</h2>
        {/* <div class="downloads">
        <button>Download for <i class="fab fa-apple fa-75x"></i></button> 
        <button>Download for <i class="fab fa-windows fa-75x"></i></button> 
        </div> */}
        <div class="social-container">
          <button>
            <a
              href="https://www.chartjs.org/samples/latest/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chart.js Samples
            </a>
          </button>
          <button>
            <a
              href="https://github.com/jerairrest/react-chartjs-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Chart.js 2 <i class="fab fa-github fa-75x"></i>
            </a>
          </button>
          <button>
            <a
              href="https://medium.com/osiris-component-generator-and-ui-library/many-minds-one-solution-9deaf3101789"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Read about us on <i class="fab fa-medium-m fa-75x"></i>
            </a>
          </button>
        </div>
      </header>
      <h1 className="main-header">Features</h1>
      <body>
        <div className="feature1wrap">
          <div className="feature1">
            {/* <h1>UI Generator and Library Features</h1> */}
            <h1>First Graph</h1>
            <ul>
              <li>Create custom doughnut graphs</li>
              <br></br>
              <li> . . . </li>
              <br></br>
              <li>This is what a couple lines of text would look like</li>
            </ul>
          </div>
          <div className="feature1img">
            {/* <img className="gif" src={generator} alt="generator demo gif" /> */}
            <h2> First Graph</h2>
            <Doughnut data={data} />
          </div>
        </div>
        {/* 3 gifs * 
      1. add to build, adding css/styling of one components to the hierarchy and ordering it (adding a button would be good  example for this)
      2. jump cut to a hierarchy filled out with different components (div, navbar, img, h1, p, button) and demo organizing hierarchy and placing into div
      3. demo the different drop down code option templates -> then download to desktop
      */}
        <div className="feature2wrap">
          <div className="feature2img">
            <h2>Line Example</h2>
            <Line data={data} />
            {/* <img className="gif" src={buildpage1} alt='build page demo' /> */}
          </div>
          <div className="feature2">
            <h1>
              Build Page:<br></br>Style and Add to Build
            </h1>
            <ul>
              <li>Check out this sick graph on the left</li>
              <br></br>
              <li> . . . </li>
              <br></br>
              <li>Most people think this is the surface</li>
            </ul>
          </div>
        </div>
        <div className="feature3wrap">
          <div className="feature3">
            <h1>
              If<br></br>Only{" "}
            </h1>
            <ul>
              <li>they knew</li>
              <br></br>
              <li> . . . </li>
              <br></br>
              <li>Lots of text to make it seem like we know what we're doing </li>
              <li>Three rows looks like this</li>
            </ul>
          </div>
          <div className="feature3img">
            {/* <img className="gif" src={buildpage2} alt='build page demo 2' /> */}
          </div>
        </div>
      </body>
      <footer>
        <h1 className="engineer-team">Our Team of Actuaries</h1>
        <div className="profiles">
          <div className="profile">
            <p>Garrett Lee</p>
            <img src={Garrett} alt="Garrett Profile pic" className="profilepic" />
            <div className="profileLinks">
              <a href="https://github.com/geewailee" target="_blank" rel="noopener noreferrer">
                <img className="githubicon" alt="github" src={githubicon} />
              </a>
              <a href="https://www.linkedin.com/in/gl6/" target="_blank" rel="noopener noreferrer">
                <img className="githubicon" alt="github" src={linkedin} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React from 'react';
import clock from './clock.png';
import rain from './rain.jpg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Clock from './clock/Clock';

function App() {

  let l = new Date();

  return (
    <div className="mainGrid">
      <div className="weatherGrid">
        <div className="weatherText">
          <div className="temperature">23°</div>
          <div className="rain">30% Regenrisiko</div>
        </div>
        <div className="weatherImageContainer">
          <img src={rain} className="weatherImage" ></img>
        </div>
      </div>
      <div className="separator"></div>
      <div className="clockGrid">
        <img src={clock}></img>
      </div>
      {/* <Clock value={l} size={200} /> */}
    </div>
  );
}

export default App;

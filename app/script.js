import React from 'react';
import { render } from 'react-dom';

formatTime = () => {
  format = () => {
  let minutes = Math.floor(this.time / 60);
  let seconds = this.time - (minutes * 60);
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return minutes+':'+seconds;
  }   
};

step = () => {
  for (i=time; i=0; i--) {
    if (state.status === 'work') {
      state.status = 'rest';
      time = 20;
      playBell();
    } else {
      state.status = 'work';
      time = 1200;
      playBell();
    }
  }
};

startTimer = () => {
time = 1200;
  this.setState({
    timer: setInterval(this.step, 1000),
  });
state.status = 'work';
};

stopTimer = () => {
  window.clearInterval(timer);
  state.time = 0;
  state.status = 'off';
};

closeApp = () => {
  window.close();
};

playBell = () => {
  const bell = new Audio('./sounds/bell.wav');
  bell.play();
};

class App extends React.Component {

render() {

  const { status } = this.state;

  step();

  return (
    <div>
      <h1>Protect your eyes</h1>
      {(status === 'off') && <AppDescription />}
      {(status === 'work') && <img src="./images/work.png" />}
      {(status === 'rest') && <img src="./images/rest.png" />}
      {(status !== 'off') && <div className="timer">{formatTime}</div>}
      {(status === 'off') && <button className="btn" onClick={startTimer}>Start</button>}
      {(status !== 'off') && <button className="btn" onCLick={stopTimer}>Stop</button>}
      <button className="btn btn-close" onClick={closeApp}>X</button>
    </div>
  )
 };
}

render(<App />, document.querySelector('#app'));
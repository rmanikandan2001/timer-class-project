import React, { Component } from 'react'
import './App.css';

class Timer extends Component {

  constructor(props){

    super(props);

    this.state = {
      seconds : 0,
      milliseconds : 0,
      isActive : false,
    };

    this.timerInterval = null;
  }

  componentWillUnmount(){
    clearInterval(this.timerInterval);
  }

  startTimer = () => {

    if(!this.state.isActive) {
      this.setState({ isActive : true });

      this.timerInterval = setInterval(()=> {
        this.setState((preSeconds) =>({
          seconds : preSeconds.seconds + 1,
        }));
      }, 1);
    }
  };

  pauseTimer = () => {
    clearInterval(this.timerInterval);
    this.setState({isActive : false});
  };

  resetTimer = () => {
    clearInterval(this.timerInterval);
    this.setState({
      seconds : 0,
      milliseconds : 0,
      isActive : false,
    });
  }

  render() {

    const {seconds, isActive, milliseconds} = this.state;

    return (
      <div className='run'>
        <h1>Time class Counter</h1>
        <p className = 'btn'>
         COUNTER : {milliseconds}:{seconds}
        </p>
        <div>
          <button className = 'startBtn' onClick = {this.startTimer} disabled={isActive}>Start</button>
          <button className = 'pauseBtn' onClick = {this.pauseTimer} disabled={!isActive}>Pause</button>
          <button className = 'resetBtn' onClick = {this.resetTimer} disabled={!isActive}>Reset</button>
        </div>
      </div>
    )
  }
}

export default Timer;
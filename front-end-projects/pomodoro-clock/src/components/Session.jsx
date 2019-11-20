import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Break from './Break'


class Session extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 25,
            seconds: 0,
            start: false,
            startBreak: false
        }
    }

    startTimer = () => {
        this.setState({
            start: !this.state.start
        })
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds < 2) {
                if (minutes === 0) {
                        const audio = new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3')
                        audio.play();
                }
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                    this.setState({ startBreak: true })
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }
    resumeTimer = () => {
        this.setState({
            start: true,
            minutes: 25,
            startBreak: false,
            seconds: 0
        })
        this.startTimer()
    }
    reset = () => {
        this.setState({
            minutes: 25,
            seconds: 0,
            start: false,
            startBreak: false
        })
        clearInterval(this.myInterval)
    }
    pause = () => {
        this.setState({
            start: false,
            startBreak: false
        })
        clearInterval(this.myInterval)
    }

    render() {
        const { minutes, seconds, startBreak } = this.state
        return (
            <div className="Session">
                <h1>Session length</h1>
                <h3>25 minutes</h3>
                <div>
                    <h1 className="H1">{minutes} : {seconds < 10 ? `0${seconds}` : seconds}</h1>
                    <div className="Buttons">
                        <button disabled={this.state.start} onClick={() => this.startTimer()}>Play</button>
                        <button onClick={() => this.pause()}>Pause</button>
                        <button onClick={() => this.reset()}>Reset</button>
                    </div>
                </div>
                <h1>Break length</h1>
                <h3>5 minutes</h3>
                {startBreak === true ? <Break restartTimer={this.resumeTimer} /> : null}
            </div>
        );
    }
}

Session.propTypes = {

};

export default Session;
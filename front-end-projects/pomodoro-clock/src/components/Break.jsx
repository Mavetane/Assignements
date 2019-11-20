import React, { Component } from 'react';

class Break extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 5,
            seconds: 0
        }

    }
    componentWillMount= () => {
        this.setState({
          start: !this.state.start
        })
        this.myInterval = setInterval(() => {
            const {seconds, minutes} = this.state

            if (seconds > 0) {
                this.setState(({seconds}) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                    this.props.restartTimer()
                    this.setState({
                        minutes: 5,
                        seconds: 0
                    })
                } else {
                    this.setState(({minutes}) => ({
                        minutes: minutes -1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
      }


    render() {
        const {minutes, seconds} = this.state;
        return (
            <div>
                <div>
                    <h1 className="H1">{minutes} : {seconds < 10 ? `0${seconds}` : seconds}</h1>
                </div>
            </div>
        );
    }
}

Break.propTypes = {

};

export default Break;
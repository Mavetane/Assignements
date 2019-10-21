import React, { Component } from 'react';
import { audios, pianoAudios } from '../config/index';

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            switch: false,
            power: false,
            beat: ""
        }
    }
    controlSwitch = () => {
        this.setState({
            switch: !this.state.switch
        })
    }
    togglePower = () => {
        this.setState({ power: !this.state.power })
    }

    handleClick = (sound) => {
        if (this.state.power === true) {
            if (this.state.play !== true) {
                let audio = new Audio(sound.url)
                return audio.play()
            }
            this.setState({
                play: !this.state.play
            })
        }
    }

    render() {
        return (
            <div className="Wrapper">
                {!this.state.switch == true ?
                    <div className="Buttons">
                        {audios.map(sound => {
                            return <div><button onClick={() => this.handleClick(sound)} id={sound.name}>{sound.letter}</button></div>
                        })}
                    </div> : <div className="Piano">{pianoAudios.map(sound => {
                        return <div><button onClick={() => this.handleClick(sound)} id={sound.name}>{sound.letter}</button></div>
                    })}</div>}

                <div className="Controls">
                    <p>Power</p>
                    <label className="Power">
                        <input type="checkbox" onClick={() => this.togglePower()} />
                        <span className="Slider-two"></span>
                    </label><br />
                    <div className="Blank">{this.state.beat}</div>
                    <br />
                    <div ClassName="Box">
                        <center><div id="Value"></div></center>
                    </div>
                    <div className="Volume-container">
                        <input type="range" min="0" max="100" value="50" className="Volume-slider" id="Volume-slider" />
                    </div><br />
                    {!this.state.switch == true ? <h4>Heater</h4> : <h4>Piano</h4>}
                    <label className="Switch">
                        <input type="checkbox" onClick={() => this.controlSwitch()} />
                        <span className="Slider"></span>
                    </label>
                </div>
            </div>
        );
    }
}

Buttons.propTypes = {
};

export default Buttons;
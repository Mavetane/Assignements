import React, { Component } from 'react';
import { audios } from '../audios/Audios';
// import audios from 

class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audios: audios,
            power: false,
            play: false,
            counter: 0,
            order: [],
            playerOrder: [],


        }
    }
    togglePower = () => {
        this.setState({
            power: !this.state.power
        })
    }

    handleSound = (sound) => {
        if (this.state.power === true) {
            if (this.state.play === true) {
                let audio = new Audio(sound.url)
                return audio.play()
            }
            this.setState({
                play: !this.state.play
            })
        } else {
            return null;
        }

    }

    handleStart = () => {
        const { audios } = this.state

        var i = 0;
        // var nowPlaying;
        // var play;
       
        // 
 
        // var audio = audios[i].url;
        
        var newAudios = JSON.parse(JSON.stringify(this.state.audios));
        var interval = setInterval(() => {
            var initial = i;
            
            audios[initial].color = "white";
            
            this.setState({ audios })
            setTimeout(() => {
                
                // nowPlaying = play.play()
                // console.log()
                audios[initial].color = newAudios[initial].color;
                for (var index in audios) {
                    var audio = audios[index].url;
                    console.log("audio", audio)
                    // let playAudio = new Audio(audio)
                    // play = playAudio
                    // console.log("I'm audio url", play)
                    // return playAudio.play()
                }
                this.setState({ audios: newAudios });
            }, 500);
            if (initial == 3) {
                clearInterval(interval)
            }
            i++;
        }, 800);
    }


    render() {
        return (
            <div className="Wrapper">
                <div className="Container">
                    {audios.map(sound => {
                        return <button onClick={() => this.handleSound(sound)} style={
                            { backgroundColor: sound.color }}
                            className="Blocks" id={sound.id
                            } />
                    })}
                </div>
                <br />
                <div className="Controls">
                    <h1>Controls</h1>
                    <div className="Power">
                        <div className="Counter">{this.state.counter}</div>
                        {this.state.power ? <label>OFF</label> : null}
                        <label className="Switch">
                            <input type="checkbox" onClick={() => this.togglePower()} />
                            <span className="Slider" ></span>
                        </label>
                        {!this.state.power ? <label>ON</label> : null}
                        <br />
                        <button onClick={() => this.handleStart()}>START!</button>
                    </div>
                </div>
            </div>
        );
    }
}

Buttons.propTypes = {

};

export default Buttons;
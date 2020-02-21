import React, { Component } from 'react';
import { audios } from '../audios/Audios';


class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            audios: audios,
            power: false,
            play: false,
            counter: 1,
            order: [],
            playerMoves: [],
            computerMoves: [],
            randomNumbers: []
        }
    }
    togglePower = () => {
        this.setState({
            power: !this.state.power
        })
    }

    handleSound = (sound) => {
        let { playerMoves, power } = this.state
        if (power) {
            if (this.state.play) {
                let audio = new Audio(sound.url)
                playerMoves.push(sound.id)
                console.log("PlayerOrder", playerMoves)
                return audio.play()
            }
            this.setState({
                play: !this.state.play,
            })
        } else {
            return null;
        }

    }

    handleStart = () => {

        const { audios, computerMoves, power } = this.state
        if (power) {
            let audio;
            const { randomNumbers } = this.state
            let numbers = Math.floor(Math.random() * 4) + 1;
            randomNumbers.push(numbers)
            console.log(randomNumbers)

            var newAudios = JSON.parse(JSON.stringify(audios));
            var ts = randomNumbers.map(i =>{
                  var interval = setInterval(() => {
                var initial = i;
console.log("I'm audios", audios[initial])
                audios[initial].color = "white";

                this.setState({ audios })
                setTimeout(() => {
                    //comColor
                    audios[initial].color = newAudios[initial].color;
                    this.setState({ audios: newAudios });
                    //comMoves
                    //comSound
                    audio = new Audio(audios[initial].url)
                    audio.play()
                    // console.log("I'm audio", audio)
                }, 500);
                if (initial === 3) {
                    clearInterval(interval)
                }
                i++;
            }, 800);
                
                
         } )

        }
    }

    onTest = () => {
        const { randomNumbers } = this.state
        let numbers = Math.floor(Math.random() * 4) + 1;
        randomNumbers.push(numbers)
        console.log(randomNumbers)
    }

    render() {
        const { power, counter } = this.state;
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
                        {power ? <div className="Counter">{counter}</div> : null}
                        {power == false ? <label>Power: </label> : null}
                        {power ? <label>OFF</label> : null}
                        <label className="Switch">
                            <input type="checkbox" onClick={() => this.togglePower()} />
                            <span className="Slider" ></span>
                        </label>
                        {power ? <label>ON</label> : null}
                        {power == false ? <label>ON</label> : null}
                        <br />
                        {power ? <button onClick={() => this.handleStart()}>
                            START!</button> : null}
                        <button onClick={() => this.onTest()}>Test</button>
                    </div>
                </div>
            </div>
        );
    }
}

Buttons.propTypes = {

};

export default Buttons;
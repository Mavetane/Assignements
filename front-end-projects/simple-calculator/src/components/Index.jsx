import React, { Component } from 'react';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: '0',
            results: ""
        }

    }
    handleChange = (digit) => {
        const { count } = this.state
        this.setState({
            count: count === '0' ? String(digit) : count + digit,
            results: ""
        })
    }
  
    reset = () => {
        this.setState({ count: '0' })
    }
    calculate = () => {
        try {

            const { count } = this.state
            const total = eval(count)
            this.setState({
                results: total,
                count: ""
            })
        }
        catch (error) {
            this.setState({
                count: "undefined"
            })
        }
    
    }
    
    render() {
        return (
            <div className="Cover">
                <div className="Calculator">
                    <input value={this.state.results == "" ? this.state.count: this.state.results} className="Calculator-screen" />
                    <div className="Background">
                        <div className="Calculator-keys">
                            <button onClick={() => this.handleChange(7)}>7</button>
                            <button onClick={() => this.handleChange(8)}>8</button>
                            <button onClick={() => this.handleChange(9)}>9</button>
                            <button onClick={() => this.handleChange(4)}>4</button>
                            <button onClick={() => this.handleChange(5)}>5</button>
                            <button onClick={() => this.handleChange(6)}>6</button>
                            <button onClick={() => this.handleChange(1)}>1</button>
                            <button onClick={() => this.handleChange(2)}>2</button>
                            <button onClick={() => this.handleChange(3)}>3</button>
                            <button onClick={() => this.handleChange(".")}>.</button>
                            <button onClick={() => this.handleChange("0")}>0</button>
                            <button onClick={() => this.handleChange("+")}>+</button>
                            <button onClick={() => this.handleChange("-")}>-</button>
                            <button onClick={() => this.handleChange("*")}>*</button>
                            <button onClick={() => this.handleChange("/")}>/</button>
                            <button onClick={() => this.reset()}>AC</button>
                            <button onClick={() => this.calculate()}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Index.propTypes = {

};

export default Index;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom'


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            // message: "",
            // charsLeft: 150,
            // max_char: 150
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(name) {
        this.props.addName(name)
        this.setState({
            ...this.state,
            name: ""
        })

        this.setState({
            name: "",
        })
    }

    render() {
        return (
            <div className="Post-form">
                <header className="Header" >
                <h1 > TCG Broadcast </h1>
                <div className="Nav-bar" >
                    <a href="http://localhost:3000/" > Home </a>
                    <a href="http://mavetane.github.io" > Developer</a>
                    <a href="http://thecodingground.com/" > website </a>
                </div>
            </header>
        
                <h1 className="Post-form-h1">Add Username</h1>
                <form className="Form">
                    <span class="glyphicon glyphicon-user"></span>
                    <div className="Name">
                        <input type="text" name="name" placeholder="Enter Username"
                            minLength="1"
                            required
                            onChange={this.onChange}
                            value={this.state.name} />
                    </div>
                    <br />
                    
                    < Link onClick={() =>
                        this.onSubmit(this.state.name)}
                        className="Link"
                         to='/Post'>LOG IN
                    </ Link>

                </form>
                <h3 className="Footer">Collen's design</h3>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    name: state.posts.name
})

const mapDispatchToProps = dispatch => ({
    addName: (name) => {
        dispatch({
            type: "ADD_NAME",
            payload: { name }
        })
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
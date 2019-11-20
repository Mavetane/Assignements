import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            message: "",
            register: false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        const post = {
            name: this.state.name,
            message: this.state.message
        };
        this.props.createPost(post);
        window.location.reload()
    }
    handleRegistration=()=> {
        
    }

    render() {
        return (
            <div className="Post-form">
                <h1 className="Post-form-h1">Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name:</label><br />
                        <input type="text" name="name" onChange={this.onChange}
                            value={this.state.name} />
                    </div>
                    <br />
                    <div>
                        <label>Message:</label><br />
                        <textarea name="message" type="text" onChange={this.onChange}
                            value={this.state.message} />
                    </div>
                    <br />
                    <button type="subit">Submit</button>
                </form>
            </div>
        );
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
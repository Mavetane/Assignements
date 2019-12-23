import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost, fetchPosts } from '../actions/postActions';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            message: "",
            charsLeft: 150,
            max_char: 150
        }
    }

    componentWillMount() {
        const displayName = this.props.loggedName
        return displayName
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        const charCount = e.target.value.length;
        const maxChar = this.state.max_char;
        const charLength = maxChar - charCount;
        this.setState({ charsLeft: charLength });
    }
    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            name: this.props.loggedName,
            message: this.state.message
        };
        this.props.createPost(post);
        this.setState({
            message: ""
        })
        this.props.fetchPosts()
    }

    render() {
        return (
            <div className="Messages">
                <div className="Messages-wrapper">
                    <div className="Log-name">
                        <a href="#" class="btn btn-info btn-lg">
                            <span class="glyphicon glyphicon-user"></span>  {this.props.loggedName}
                        </a>
                    </div>
                    <div className="Form-wrapper">
                    <form onSubmit={this.onSubmit}>
                        <div className="Message">
                            <textarea name="message" placeholder="'Enter your post'"
                                maxLength="150"
                                required
                                type="text" onChange={this.onChange}
                                value={this.state.message} />
                            <p>{this.state.charsLeft}</p>
                        </div>
                        <br />
                        <button type="submit" className="Button"><span class="glyphicon glyphicon-send"></span> Send</button>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}

Messages.propTypes = {
    createPost: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    loggedName: state.posts.name,

})

export default connect(mapStateToProps, { createPost, fetchPosts })(Messages);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentWillMount() {
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.uuid}>
                <h4>Name: {post.name}</h4>
                <p>Post: "{post.message}"</p>
                <label>Date: {post.date}</label>
            </div>
        ));
        return (
            <div className="Posts">
                <h1 className="Posts-h1">Posts</h1>
                {postItems}
            </div>
        );
    }
}


Post.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Post);
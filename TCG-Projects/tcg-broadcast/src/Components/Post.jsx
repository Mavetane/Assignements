import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import PropTypes from 'prop-types';
import Messages from '../Components/Messages'
import moment from 'moment'


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        this.props.fetchPosts()
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
        const postItems = this.props.posts
        .map(post => ({...post, date: new Date(post.date)}))
        .sort((a,b) => {
            return b.date.getTime() - a.date.getTime() 
        })
        
        console.log(postItems)

        return (
            <div>
                <div><Messages /></div>
                <div className="Posts">
                    <h1 className="Posts-h1">Posts</h1>
                    {postItems.map(post => (
            <div key={post.uuid} className="Post-container">
                <div className="Post-name">
                    <h4><span class="glyphicon glyphicon-user"></span> {post.name}</h4>
                </div>
                <div className="Speech-bubble">
                    <label>{moment(post.date).format("MMMM Do YYYY, h:mm:ss a")}</label>
                    
                    <p>"{post.message}"</p>
                </div>

            </div>
        ))}
                </div>
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
    newPost: state.posts.item,
})

export default connect(mapStateToProps, { fetchPosts })(Post);
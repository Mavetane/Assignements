import { FETCH_POSTS, NEW_POST } from './types';

const url = "ws://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/chat/"
        var exampleSocket = new WebSocket(url);

export const fetchPosts = () => dispatch => {

    exampleSocket.onopen = function (event) {
        console.log("connected");
    };
    exampleSocket.onmessage = function (event) {
        const messages = JSON.parse(event.data);
        console.log("message", messages)
        dispatch({
            type: FETCH_POSTS,
            payload: messages
        })
    }
}

export const createPost = (postData) => dispatch => {

    exampleSocket.send(JSON.stringify(postData))
    console.log("This is post data", postData)
    dispatch({
        type: NEW_POST,
        payload: postData
    })
}
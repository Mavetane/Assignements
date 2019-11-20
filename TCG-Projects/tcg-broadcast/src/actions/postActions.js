import { FETCH_POSTS, NEW_POST } from './types';

export const fetchPosts = () => dispatch => {
    fetch('http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/person/')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }));
}

export const createPost = (postData) => dispatch => {
    
    fetch('http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/person/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(res => console.log(res))
            .then(data => dispatch({
                type: NEW_POST,
                payload: data
            }))
}
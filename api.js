import { setUser } from "./reducers/user"
import { setNewsFeed } from "./reducers/newsfeed"
import { setMessage } from './reducers/message'

const endpoint = "http://192.168.29.142:5000/api"

//test connection
const ping = async () => {
    try {
        const url = `${endpoint}`
        const res = await fetch(url)

        if (res.status === 200) {
            console.log("success!");
        } else {
            throw res.status
        }
    }
    catch (err) {
        console.log(err);
    }
}

// Get all orders as a list
const login = userData => async dispatch => {
    try {
        const url = `${endpoint}/login`

        // const res = await fetch(url, {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(userData)
        // })
    
        // const data = await res.json()
        // if (res.status === 200) {
            dispatch(setUser({id: 0}))
        // } else {
        //     throw res.status
        // }
    }
    catch (err) {
        dispatch(setMessage({value: "Login Failed", type: "Error"}))
    }
}

// Get news feed (collection of posts ordered by likes)
const getNewsFeed = () => async dispatch => {
    try {
        const url = `${endpoint}/newsfeed`
        const res = await fetch(url)
    
        const data = await res.json()
        if (res.status === 200) {
            dispatch(setNewsFeed(data))
        } else {
            throw res.status
        }
    }
    catch (err) {
        dispatch(setMessage({value: "Failed to get posts - Something went wrong", type: "Error"}))
    }
}

// Create a new post
const createPost = post => async dispatch => {
    try {
        const url = `${endpoint}/post`
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        })
    
        await res.json()
        if (res.status === 201) {
            dispatch(setMessage({value: "Success!!! Your post has been created", type: "Success"}))
        } else {
            throw res.status
        }
    }
    catch (err) {
        dispatch(setMessage({value: "Failed to create post - Something went wrong", type: "Error"}))
    }
}


const api = { login, createPost, getNewsFeed, ping }
export default api
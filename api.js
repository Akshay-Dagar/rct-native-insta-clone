import { setUser, userFetchEnd } from "./reducers/user"
import { setNewsFeed } from "./reducers/newsfeed"
import { setPosts } from './reducers/posts'
import { addComment, setComments } from './reducers/comments'
import { showToast } from "./utils"

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

// Login
const login = userData => async dispatch => {
    try {
        const url = `${endpoint}/login`

        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
    
        const data = await res.json()
        if (res.status === 200) {
            dispatch(setUser(data))
        } else {
            throw res.status
        }
    }
    catch (err) {
        dispatch(userFetchEnd())
        showToast("Login Failed, please check your credentials and try again")
    }
}

// Signup
const signup = userData => async dispatch => {
    try {
        const url = `${endpoint}/signup`

        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })

        const data = await res.json()
        if (res.status === 201) {
            dispatch(setUser(data))
        } else {
            throw res.status
        }
    }
    catch (err) {
        dispatch(userFetchEnd())
        showToast("Signup Failed, please try again")
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
        showToast("Failed to fetch posts, something went wrong")
    }
}

// Get posts
const getPosts = (userId = undefined) => async dispatch => {
    try {
        const url = userId ? `${endpoint}/post?userId=${userId}` : `${endpoint}/post`
        const res = await fetch(url)
    
        const data = await res.json()
        if (res.status === 200) {
            dispatch(setPosts(data))
        } else {
            throw res.status
        }
    }
    catch (err) {
        showToast("Failed to fetch posts")
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
    
        const data = await res.json()
        if (res.status === 201) {
            showToast("Post created succesfully")
        } else {
            throw res.status
        }
    }
    catch (err) {
        showToast("Failed to create posts")
    }
}

// Get posts
const getComments = postId => async dispatch => {
    try {
        const url = `${endpoint}/post/${postId}/comment`
        const res = await fetch(url)
    
        const data = await res.json()
        if (res.status === 200) {
            dispatch(setComments(data))
        } else {
            throw res.status
        }
    }
    catch (err) {
        showToast("Failed to retrieve comments for this post")
    }
}

// Create a new comment
const createComment = comment => async dispatch => {
    try {
        const url = `${endpoint}/post/${comment.postId}/comment`
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comment)
        })
    
        const data = await res.json()
        if (res.status === 201) {
            dispatch(addComment(data))
            showToast("Comment added succesfully")
        } else {
            throw res.status
        }
    }
    catch (err) {
        showToast("Failed to add comment for this post")
    }
}

// Like a post
const likePost = postId => async dispatch => {
    try {
        const url = `${endpoint}/post/${postId}/like`
        const res = await fetch(url)

        if (res.status !== 200) {
            throw res.status
        }
    }
    catch (err) {
        showToast("Failed to like post")
    }
}

const api = { login, createPost, getNewsFeed, ping, getPosts, getComments, createComment, signup, login, likePost }
export default api
import { setUser } from "./reducers/user"

const endpoint = "http://192.168.29.142:5000"

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
            dispatch(setUser({}))
        // } else {
        //     throw res.status
        // }
    }
    catch (err) {
        dispatch(setMessage({value: "Login Failed", type: "Error"}))
    }
}

const api = {login}
export default api
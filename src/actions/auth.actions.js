import axios from '../utils/myAxios'
import { authConstants, globalConstants } from './globalConstants'


export const keepUserLoggedIn = (payload) => async (dispatch) => {
    try {
        // const accessToken = localStorage.getItem('firstlogin')
        // if (accessToken) {
        const res = await axios.get('/refreshToken')
        if (res.status === 200) {
            dispatch({
                type: authConstants.LOGIN,
                payload: res.data
            })
            // }
        }
    } catch (error) {
        console.log(error.message)
        dispatch({ type: globalConstants.ALERT, payload: {} })
    }
}
export const loginAction = (payload) => async (dispatch) => {
    try {
        dispatch({
            type: globalConstants.ALERT,
            payload: { loading: true }
        })
        const res = await axios.post('/signin', {
            ...payload
        })
        if (res.status === 200) {
            localStorage.setItem("firstlogin", 'firstlogin')
            dispatch({
                type: authConstants.LOGIN,
                payload: res.data
            })
            dispatch({
                type: globalConstants.ALERT,
                payload: { success: 'successfully Logged In!' }
            })
        }
    } catch (error) {
        return dispatch({ type: globalConstants.ALERT, payload: { error: error.message } })
    }
}
export const logOut = () => async (dispatch) => {
    try {
        localStorage.clear()
        await axios.post('/logout')
        dispatch({
            type: authConstants.LOGOUT,
            payload: {}
        })
        dispatch({
            type: globalConstants.ALERT,
            payload: {}
        })
    } catch (error) {
        return dispatch({ type: globalConstants.ALERT, payload: {} })
    }
}
export const signUpAction = (data) => async (dispatch) => {
    try {
        const res = await axios.post('/signup', {
            ...data
        })
        dispatch(keepUserLoggedIn())
    } catch (error) {
        return dispatch({ type: globalConstants.ALERT, payload: {} })
    }
}
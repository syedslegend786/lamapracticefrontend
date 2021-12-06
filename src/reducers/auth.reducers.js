import { authConstants } from "../actions/globalConstants";

const inititalState = {
    authenticate: false,
    data: {}
}


const userReducer = (state = inititalState, action) => {
    switch (action.type) {
        case authConstants.LOGIN:
            state = {
                ...state,
                authenticate: true,
                data: action.payload,
            }
            break;
        case authConstants.LOGOUT:
            state = {
                ...inititalState,
            }
            break;
    }
    return state;
}
export default userReducer;
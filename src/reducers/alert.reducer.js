import { globalConstants } from "../actions/globalConstants";
const initialState = {}
const alertReducer = (state = null, action) => {
    switch (action.type) {
        case globalConstants.ALERT:
            return action.payload
    }
    return state;
}

export default alertReducer;
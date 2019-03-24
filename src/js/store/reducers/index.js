import { LOGGING_IN } from "../constants/action-types";
const initialState = {
    loginForm: {
        visible: true
    },
    mainPanel: {
        visible: false
    }
};
function rootReducer(state = initialState, action) {
    if (action.type === LOGGING_IN) {
        return Object.assign({}, state, {
            username: action.payload.username,
            password: action.payload.password,
            loginForm: { visible: false }
        });
    }
    return state;
}
export default rootReducer;

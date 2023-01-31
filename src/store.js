import { createStore, legacy_createStore } from "redux";

const initialState = ["Overview", "Summary"];

export const changeAction = arr => {
    return {
        type: 'CHANGE',
        arr
    };
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE':
            return action.arr;
        default:
            return state;
    }
}

const store = legacy_createStore(reducer);

export default store;
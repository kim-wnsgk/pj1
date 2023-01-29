import { createStore, legacy_createStore } from "redux";

export const changeAction = arr => {
    return {
        type: 'CHANGE',
        arr
    };
};

export const reducer = (state = ["Overview", "Summary"], action) => {
    switch (action.type) {
        case 'CHANGE':
            return action.arr;
        default:
            return state;
    }
}

const store = legacy_createStore(reducer);

export default store;
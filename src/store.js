import { createStore, legacy_createStore } from "redux";

const initialState = {
    menu: ["Overview", "Summary"],
    nodeData: {
        name: "name",
        usageCpu: 0,
        UsageMemory: 1,
        Address: '0.0.0.0'
    }
};

export const changeMenuAction = arr => {
    return {
        type: 'CHANGE',
        arr,
    };
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                menu: action.arr,
                //nodeData: store.getState().nodeData,
            };
        default:
            return state;
    }
}

const store = legacy_createStore(reducer);

export default store;
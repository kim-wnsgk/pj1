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

export const changeMenuAction = menu => {
    const nd = store.getState().nodeData;
    return {
        type: 'CHANGE',
        menu,
        nd,
    };
};

export const changeNodeAction = nd => {
    const menu = store.getState().menu;
    return {
        type: 'CHANGE',
        menu,
        nd,
    };
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                menu: action.menu,
                nodeData: action.nd,
            };
        default:
            return state;
    }
}

const store = legacy_createStore(reducer);

export default store;
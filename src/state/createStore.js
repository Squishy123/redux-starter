import { createStore as reduxCreateStore } from 'redux';

import * as consts from './constants';

import * as store from 'store';
//initial state
const initialState = {
    bgColor: store.get('bgColor') || 'white'
};

function alterState(currentState, alteredState) {
    return Object.assign({}, currentState, alteredState);
}

const reducer = (state, action) => {
    switch (action.type) {
        case consts.CHANGE_BG:
            return alterState(state, { bgColor: action.bgColor });
        default:
            return state;
    }
};

const createStore = () => reduxCreateStore(reducer, initialState);

export default createStore;

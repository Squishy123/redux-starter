import { createStore as reduxCreateStore } from 'redux';

//initial state
const initialState = {
    color: 'white'
}

const reducer = (state, action) => {
    switch(action.type) {
        case `SET_BG_COLOR`:
            return Object.assign({}, state, {
                color: action.color
            });
        default:
            return state;
    }
}

const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;
import {
    DEFAULT_ACTION,
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DEFAULT_ACTION:
            return { ...state, ...INITIAL_STATE };
        default:
            return state;
    }
};

import * as ActionTypes from './actionTypes';
import AppDispatcher from './appDispatcher';

export const increment = (counterCaption) => {
    AppDispatcher.dispatch({
        type:ActionTypes.INCREMENT,
        counterCaption:counterCaption
    });
};
export const decrement = (counterCaption) => {
    AppDispatcher.dispatch({
        type:ActionTypes.DECREMENT,
        counterCaption:counterCaption
    });
};
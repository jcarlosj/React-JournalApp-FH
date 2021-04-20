import { createStore, combineReducers } from 'redux';

/** Reducers */
import { authReducer } from '../reducers/authReducer';

const reducers = combineReducers({
    auth: authReducer
});

export const store = createStore( reducers );
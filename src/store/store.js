import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

/** Reducers */
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

/** Dependencies */
import thunk from 'redux-thunk';

const composeEnhancers = ( typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ) || compose;     /** Configuracion adicional para Redux Dev Tools */

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer
});

export const store = createStore( 
    reducers, 
    composeEnhancers(
        applyMiddleware( thunk )    /** Implementacion de la dependencia que funge como Middleware de Redux */
    )
);
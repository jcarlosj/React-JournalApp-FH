import { types } from '../types/types';

/** Accion Asincrona */
export const startLoginEmailPassword = ( email, password ) => {

    // Retornara un CallBack
    return ( dispatch ) => {    /** Redux-Thunk: Permite que podamos traer el dispatch como un parametro */

        // Aqui podriamos usar dispatch todas las veces que se requiera

        setTimeout( () => {
            dispatch( login( 123, 'Sofia' ) );
        }, 3000 );

    }
}

/** Accion Sincrona */
export const login = ( uid, displayName ) => {
    return {
        type: types .login,
        payload: {
            uid,
            displayName
        }
    }
}
import { types } from '../types/types';

/** Configuracion de Firebase */
import { firebase, googleAuthProvider } from '../firebase/config';

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

/** Accion Asincrona: Login usando cuenta de Google */
export const startGoogleLogin = () => {

    // Retornara un CallBack
    return ( dispath ) => {

        firebase .auth() .signInWithPopup( googleAuthProvider )     //  Retorna una Promesa
            .then( ({ user }) => {                                  //  userCredential: Destructurando data recibida
                //  console .log( userCredential );
                dispath( login( user .uid, user .displayName ) );
            });

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
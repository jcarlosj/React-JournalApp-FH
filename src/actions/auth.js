import { types } from '../types/types';

/** Configuracion de Firebase */
import { firebase, googleAuthProvider } from '../firebase/config';

/** Acciones de UI */
import { finishLoading, startLoading } from './ui';

/** Dependencias */
import Swal from 'sweetalert2';

/** Accion Asincrona */
export const startLoginEmailPassword = ( email, password ) => {

    // Retornara un CallBack
    return ( dispatch ) => {    /** Redux-Thunk: Permite que podamos traer el dispatch como un parametro */

        dispatch( startLoading() );

        firebase .auth() .signInWithEmailAndPassword( email, password )         //  Retorna una Promesa
            .then( ({ user }) => {                                  //  userCredential: Destructurando data recibida
                // console .log( userCred );
                dispatch( login( user .uid, user .displayName ) );
                dispatch( finishLoading() );
            })
            .catch( error => {
                console.log( error );
                dispatch( finishLoading() );

                Swal .fire(
                    'Login Failed!',        //  Titulo
                    error .message,         //  HTML
                    'error'                 //  Icono
                );

            } );

    }
}

/** Accion Asincrona */
export const startRegisterNameEmailPassword = ( name, email, password ) => {
    return ( dispatch ) => {

        dispatch( startLoading() );

        firebase .auth() .createUserWithEmailAndPassword( email, password )     //  Retorna una Promesa (Crea y loguea directamente en Firebase)
            .then( async ({ user }) => {                                        //  userCredential: Destructurando data recibida

                await user .updateProfile({
                    displayName: name
                });

                // console .log( user );
                dispatch( login( user .uid, user .displayName ) );
                dispatch( finishLoading() );
            })
            .catch( error => {
                console.log( error );
                dispatch( finishLoading() );

                Swal .fire(
                    'Login Failed!',        //  Titulo
                    error .message,         //  HTML
                    'error'                 //  Icono
                );

            } );

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

/** Accion Asincrona: Logout */
export const startLogout = () => {
    return async ( dispatch ) => {

        await firebase .auth() .signOut();      //  Retorna una Promesa. Generalmente no falla, por lo que no validaremos (con then/catch o el resultado de await)

        dispatch( logout() );

    }
}

/** Acci??n sincrona: Logout */
export const logout = () => ({      //  Return Implicito
    type: types .logout
});
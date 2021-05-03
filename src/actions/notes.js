
/** FireStore */
import { db } from '../firebase/config';

/** Types */
import { types } from '../types/types';

/** Accion Asincrona: Crear una nota en Firebase */
export const startAddNewNote = () => {

    // Retornara un CallBack
    return async ( dispatch, getState ) => {    /** Redux-Thunk: Permite que podamos traer el dispatch como un parametro */

        const { uid } = getState() .auth;   /** getState: Me permite acceder a todo el State de la aplicacion */

        const newNote = {
            title: '',
            body: '',
            date: new Date() .getTime()
        }

        const documentReference = await db .collection( `${ uid }/journal/notes` ).add( newNote );        //  Retorna una Promesa: Inserta Registro a la Base de Datos de Firebase

        console .log( documentReference );

        /** */
        dispatch( activeNote( documentReference .id, newNote ) );

    }
}

/** Accoin Sincrona:  */
export const activeNote = ( id, note ) => ({
   type: types .notesActive,
   payload: {
       id,
       ...note
   } 
});
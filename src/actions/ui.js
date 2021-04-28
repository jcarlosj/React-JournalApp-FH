import { types } from '../types/types';

/** Acciones para Mensajes de Error */
export const setError = ( err ) => ({      /** Return Implicito */
    type: types.uiSetError,
    payload: err
});
export const removeError = () => ({      /** Return Implicito */
    type: types.uiRemoveError
});

/** Acciones para loading */
export const startLoading = () => ({
    type: types .uiStartLoading
});
export const finishLoading = () => ({
    type: types .uiFinishLoading
});
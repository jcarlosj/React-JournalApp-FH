import { types } from '../types/types';

export const setError = ( err ) => ({      /** Return Implicito */
    type: types.uiSetError,
    payload: err
});

export const removeError = () => ({      /** Return Implicito */
    type: types.uiRemoveError
});
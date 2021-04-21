import { useState } from 'react';

/** Hook Personalizado */
export const useForm = ( initialState = {} ) => {
    
    const [ values, setValues ] = useState( initialState );

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {
        // console.log( '>', target.name, target.value );

        setValues({      //  Actualiza State
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange, reset ];

}
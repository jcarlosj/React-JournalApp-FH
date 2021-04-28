import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

/** Hooks */
import { useForm } from '../../hooks/useForms';

/** Actions */
import { setError, removeError } from '../../actions/ui';
import { startRegisterNameEmailPassword } from '../../actions/auth';

/** Dependencies */
import validator from 'validator';

/** Page Component */
export const RegisterPage = () => {

    const
        /** Despachador de Acciones de Redux */
        dispatch = useDispatch(), 
        /** Obtener el state del Reducer (uiReducer) Destructurando solo el dato requerido */
        { errorMessage, loading } = useSelector( state => state .ui ),
        /** Implementación de Hook Personalizado */
        [ formValues, handleInputChange ] = useForm({
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        }),
        /** Destructuracion de datos del Formulario */
        { name, email, password, confirm_password } = formValues;

    //console .log( errorMessage );

    const handleRegister = ( event ) => {
        event.preventDefault();
        console.log( name, email, password, confirm_password );

        if( isFormValid() ) {
            dispatch( startRegisterNameEmailPassword( name, email, password ) );
        }

    }

    const isFormValid = () => {

        if( name .trim() .length === 0 ) {
            dispatch( setError( 'Name is required!' ) );

            return false;
        }
        else if( ! validator .isEmail( email ) ) {
            dispatch( setError( 'Email is not valid!' ) );
            
            return false;
        }
        else if( password !== confirm_password || password <= 5 ) {
            dispatch( setError( 'Password should be at least 6 characters and match each other' ) );
            
            return false;
        }

        dispatch( removeError() );

        return true;
    }

    return (
        <>
            <h1 className="auth__title">Register Page</h1>
            <form
                onSubmit={ handleRegister }
            >
                {
                    errorMessage &&
                        <div className="auth__alert-error">
                            { errorMessage }
                        </div>
                }

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirm_password"
                    className="auth__input"
                    autoComplete="off"
                    value={ confirm_password }
                    onChange={ handleInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block mtb-3"
                    disabled={ loading }
                >
                    Register
                </button>

                <Link 
                    to="/auth/login"
                    className="link"
                >
                    Already registered?
                </Link>

            </form>
        </>
    )
}

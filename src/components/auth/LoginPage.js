import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

/** Hooks */
import { useForm } from '../../hooks/useForms';

/** Actions */
import { setError, removeError } from '../../actions/ui';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';

/** Dependencies */
import validator from 'validator';

/** Page Component */
export const LoginPage = () => {

    const
        /** Despachador de Acciones de Redux */
        dispatch = useDispatch(), 
        /** Obtener el state del Reducer (uiReducer) Destructurando solo el dato requerido */
        { errorMessage, loading } = useSelector( state => state .ui ),
        /** Implementación de Hook Personalizado */
        [ formValues, handleInputChange ] = useForm({
            email: '',
            password: ''
        }),
        /** Destructuracion de datos del Formulario */
        { email, password } = formValues;
    
    //console .log( errorMessage );

    const handleLogin = ( event ) => {
        event.preventDefault();
        console.log( email, password );

        if( isFormValid() ) {
            dispatch( startLoginEmailPassword( email, password ) );   /** El despachador requiere la accion asincrona */
        }
    }

    const isFormValid = () => {

        if( ! validator .isEmail( email ) ) {
            dispatch( setError( 'Email is not valid!' ) );
            
            return false;
        }
        else if( password <= 5 ) {
            dispatch( setError( 'Password should be at least 6 characters and match each other' ) );
            
            return false;
        }

        dispatch( removeError() );

        return true;
    }

    const handleGoogleLogin = () => {
        dispatch( startGoogleLogin() );
    }

    return (
        <>
            <h1 className="auth__title">Login Page</h1>
            <form
                onSubmit={ handleLogin }
            >
                {
                    errorMessage &&
                        <div className="auth__alert-error">
                            { errorMessage }
                        </div>
                }

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    value={ email }
                    onChange={ handleInputChange }
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={ loading }
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Authentication with social networks</p>

                    <div 
                        className="google-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link 
                    to="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>

            </form>
        </>
    )
}

import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

/** Hooks */
import { useForm } from '../../hooks/useForms';

/** Actions */
import { startLoginEmailPassword } from '../../actions/auth';

/** Page Component */
export const LoginPage = () => {

    const
        /** Despachador de Acciones de Redux */
        dispatch = useDispatch(), 
        /** Implementación de Hook Personalizado */
        [ formValues, handleInputChange ] = useForm({
            email: '',
            password: ''
        }),
        /** Destructuracion de datos del Formulario */
        { email, password } = formValues;

    const handleLogin = ( event ) => {
        event.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );   /** El despachador requiere la accion asincrona */
    }

    return (
        <>
            <h1 className="auth__title">Login Page</h1>
            <form
                onSubmit={ handleLogin }
            >
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
                    //disabled={ true }
                >
                    Login
                </button>

                <div className="auth__social-networks">
                    <p>Authentication with social networks</p>

                    <div 
                        className="google-btn"
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

import React from 'react';
import { Link } from 'react-router-dom';

/** Hooks */
import { useForm } from '../../hooks/useForms';

/** Dependencies */
import validator from 'validator';

/** Page Component */
export const RegisterPage = () => {

    const
        /** Implementación de Hook Personalizado */
        [ formValues, handleInputChange ] = useForm({
            name: '',
            email: '',
            password: '',
            confirm_password: ''
        }),
        /** Destructuracion de datos del Formulario */
        { name, email, password, confirm_password } = formValues;

    const handleRegister = ( event ) => {
        event.preventDefault();
        console.log( name, email, password, confirm_password );

        if( isFormValid() ) {
            console .log( 'The form is valid :)' );
        }
    }

    const isFormValid = () => {

        if( name .trim() .length === 0 ) {
            console .log( 'Name is required!' );
            return false;
        }
        else if( ! validator .isEmail( email ) ) {
            console .log( 'Email is not valid!' );
            return false;
        }
        else if( password !== confirm_password || password <= 5 ) {
            console .log( 'Password should be at least 6 characters and match each other' );
            return false;
        }

        return true;
    }

    return (
        <>
            <h1 className="auth__title">Register Page</h1>
            <form
                onSubmit={ handleRegister }
            >
                <div className="auth__alert-error">

                </div>

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
                    //disabled={ true }
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

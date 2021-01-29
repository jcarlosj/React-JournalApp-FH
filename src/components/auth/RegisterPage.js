import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
    return (
        <>
            <h1 className="auth__title">Register Page</h1>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirm_password"
                    className="auth__input"
                />
                <button
                    type="button"
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

import React from 'react';
import {
    Redirect,
    Route,
    Switch
} from "react-router-dom";

/** Page Components  */
import { LoginPage } from '../components/auth/LoginPage';
import { RegisterPage } from '../components/auth/RegisterPage';


export const AuthRouter = () => {
    return (
        <div>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>

                <Route 
                    exact
                    path='/auth/login'
                    component={ LoginPage }
                />
                <Route 
                    exact
                    path='/auth/register'
                    component={ RegisterPage }
                />
                <Redirect to='/auth/register' />
                
            </Switch>
        </div>
    )
}

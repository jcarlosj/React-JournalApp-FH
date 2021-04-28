import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    Redirect,
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

/** Router */
import { AuthRouter } from './AuthRouter';

/** Page Components */
import { JournalPage } from '../components/journal/JournalPage';

/** Configuracion de Firebase */
import { firebase } from '../firebase/config';

/** Acciones */
import { login } from '../actions/auth';

/** Component */
export const AppRouter = () => {

    const dispatch = useDispatch();   /** Despachador de Acciones de Redux */

    useEffect( () => {
        //  Crea & retorna un Observable (objeto de tipo especial que se puede disparar mas de una vez ante los cambios en el mismo)
        firebase .auth() .onAuthStateChanged( user => {

            if( user ?.uid ) {
                console .log( user );
                dispatch( login( user .uid, user .displayName ) );
            }
            
        });     
    }, [ dispatch ] );     //  [] => Solo se ejecutara una vez

    return (
        <Router>
            <div>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                
                    <Route 
                        path='/auth'
                        component={ AuthRouter }
                    />
                    <Route 
                        exact
                        path='/'
                        component={ JournalPage }
                    />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    )
}

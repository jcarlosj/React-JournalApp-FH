import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Redirect,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

/** Router */
import { AuthRouter } from './AuthRouter';

/** Page Components */
import { JournalPage } from '../components/journal/JournalPage';
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

/** Configuracion de Firebase */
import { firebase } from '../firebase/config';

/** Acciones */
import { login } from '../actions/auth';

/** Component */
export const AppRouter = () => {

    const 
        dispatch = useDispatch(),                                       /** Despachador de Acciones de Redux */
        [ isCheckingAuth, setIsCheckingAuth ] = useState( true ),       /** Estado para comprobar autenticacion de un usuario en Firebase */
        [ isLoggedIn, setIsLoggedIn ] = useState( false );              /** Estado para determinar si hay un usuario loqueado */

    useEffect( () => {
        //  Crea & retorna un Observable (objeto de tipo especial que se puede disparar mas de una vez ante los cambios en el mismo)
        firebase .auth() .onAuthStateChanged( user => {

            if( user ?.uid ) {
                console .log( user );
                dispatch( login( user .uid, user .displayName ) );
                setIsLoggedIn( true );
            }
            else {
                setIsLoggedIn( false );
            }

            setIsCheckingAuth( false );                                 /** Finaliza comprobacion de autenticacion de usuario en Firebase */
            
        });     
    }, [ dispatch, setIsLoggedIn, setIsCheckingAuth ] );     //  [] => Solo se ejecutara una vez

    /** Valida si ha finalizado la comprobacion de autenticacion (Se puede implementar Redux a cambio de un State de Componente) */
    if( isCheckingAuth ) {
        return (
            <h2>Wait...</h2>    // Esto podria desplegarse como un componente nuevo
        );
    }

    return (
        <Router>
            <div>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                
                    <PublicRoute 
                        isAuthenticated={ isLoggedIn }  //  Autenticacion (true/false): Propiedad definida esperada
                        component={ AuthRouter }        //  Router: Propiedad definida esperada
                        path="/auth"                    //  Ruta para la que se define el acceso privado (Esto afectara a todas las rutas hijas del Router)
                    />
                    <PrivateRoute 
                        isAuthenticated={ isLoggedIn }  //  Autenticacion (true/false): Propiedad definida esperada
                        component={ JournalPage }       //  Router: Propiedad definida esperada
                        exact path="/"                  //  Ruta para la que se define el acceso privado (Esto afectara a todas las rutas hijas del Router)
                    />

                    <Redirect to='/auth/login' />

                </Switch>
            </div>
        </Router>
    )
}

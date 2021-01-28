import React from 'react';
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

export const AppRouter = () => {
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

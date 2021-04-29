import React from 'react';
import { useDispatch } from 'react-redux';

/** Acciones */
import { startLogout } from '../../actions/auth';

/** Components */
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

    const dispatch = useDispatch();     /** Despachador de Acciones de Redux */

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <aside className="journal__sidebar">
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-4"> 
                    <i className="far fa-moon"></i>
                    <span> Eva Sofía</span>
                </h3>

                <button 
                    className="btn"
                    onClick={ handleLogout }
                >
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar fa-4x"></i>
                <p
                    className="mt-4"
                >New entry</p>
            </div>

            <JournalEntries />

        </aside>
    )
}

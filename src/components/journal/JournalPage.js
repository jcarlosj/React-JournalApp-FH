import React from 'react';
import { useSelector } from 'react-redux'

/** Components */
import { Sidebar } from './Sidebar';
import { NothingSelected } from './NothingSelected';
import { NotePage } from '../notes/NotePage';

/** Page Component */
export const JournalPage = () => {

    const { active } = useSelector( state => state .notes );         /** Obtener el state del Reducer (authReducer) Destructurando solo el dato requerido */

    return (
        <div className="journal__main-content">

            <Sidebar />

            <main>
                {   active 
                        ?   <NotePage />
                        :   <NothingSelected />
                
                }
                
            </main>
            
        </div>
    )
}

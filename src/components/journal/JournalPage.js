import React from 'react';

/** Components */
import { Sidebar } from './Sidebar';
// import { NothingSelected } from './NothingSelected';
import { NotePage } from '../notes/NotePage';

export const JournalPage = () => {
    return (
        <div className="journal__main-content">

            <Sidebar />

            <main>
                {/* <NothingSelected /> */}
                <NotePage />
            </main>
            
        </div>
    )
}

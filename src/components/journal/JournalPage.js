import React from 'react';

/** Components */
import { Sidebar } from './Sidebar';
import { NothingSelected } from './NothingSelected';

export const JournalPage = () => {
    return (
        <div className="journal__main-content">

            <Sidebar />

            <main>
                <NothingSelected />
            </main>
            
        </div>
    )
}

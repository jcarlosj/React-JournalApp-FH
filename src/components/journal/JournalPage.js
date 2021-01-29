import React from 'react';

/** Components */
import { Sidebar } from './Sidebar';

export const JournalPage = () => {
    return (
        <div className="journal__main-content">

            <Sidebar />

            <main>
                <h1 className="mt-4">Journal Page</h1>
            </main>
            
        </div>
    )
}

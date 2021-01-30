import React from 'react';

/** Components */
import { NotesAppBar } from './NotesAppBar';

export const NotePage = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">
                
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />
                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                >
                </textarea>

                <div className="notes__image">
                    <img 
                        src="https://www.wallpaperup.com/uploads/wallpapers/2014/01/02/213479/ab93c789377a9eaed40518561d7e1d17-500.jpg"
                        alt="German Shepherd"
                    />
                </div>

            </div>

        </div>
    )
}

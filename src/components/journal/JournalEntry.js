import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={ {
                    backgroundSize: 'cover',
                    backgroundImage: 'url( https://www.shepped.com/wp-content/uploads/2016/05/GuntherIV-rich-dog.png )' 
                } }
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    A new day
                </p>
                <p className="journal__entry-content">
                    Ut nostrud occaecat exercitation ipsum. Aliquip enim duis in aliquip veniam.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}

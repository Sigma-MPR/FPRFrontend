import React from 'react';
import BooksPublished from './components/BooksPublished';
import ConferenceProceedings from './components/ConferenceProceedings';
import './ViewAllAchievements.css';

export default function ViewAllAchievements(){
    return(
        <div>
            <div id='TopCollection'>
                <input type="text" placeholder="Click Here To Search Achievement" className="input input-ghost w-9/12 max-w-full" />
                <button className="btn glass bg-light disabled px-12 ">Filter</button>
                <button className="btn glass bg-gray px-12 hover:text-light">Sort</button>
            </div>
            <BooksPublished/>
            <ConferenceProceedings />
        </div>
    );
}

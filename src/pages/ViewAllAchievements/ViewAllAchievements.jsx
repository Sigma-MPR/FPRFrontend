import React from 'react';
import BooksPublished from './components/BooksPublished';
import ConferenceProceedings from './components/ConferenceProceedings';
import './ViewAllAchievements.css';
import AddAchievementButton from '../../components/AddAchievementButton/AddAchievementButton';
import { useLocation } from 'react-router';
export default function ViewAllAchievements(){
    const props = {
        "name": "Books Published", 
        "link": "/achievements/bookspublished",
        "available": true
    }
    
    return(
        <div>
            <div id='TopCollection'>
                <input type="text" placeholder="Click Here To Search Achievement" className="input input-ghost w-9/12 max-w-full" />
                <button className="btn glass bg-light disabled px-12 ">Filter</button>
                <button className="btn glass bg-gray px-12 hover:text-light">Sort</button>
            </div>
            <div id='longAddButton'>
                <AddAchievementButton achievement = {{prop: props }}/>
            </div>
            <BooksPublished/>
            <ConferenceProceedings />
        </div>
    );
}

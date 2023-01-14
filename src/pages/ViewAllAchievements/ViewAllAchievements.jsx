import React from 'react';
// achievements
import BooksPublished from './components/BooksPublished';
import ConferenceProceedings from './components/ConferenceProceedings';
import Journals from './components/Journals';
import Awards from './components/Awards';

// css
import './ViewAllAchievements.css';
import AddAchievementButton from '../../components/AddAchievementButton/AddAchievementButton';

export default function ViewAllAchievements(){
    const props = [
        {
        "name": "Books Published", 
        "link": "/achievements/bookspublished",
        "available": true,
        },
        {
            "name": "Conference Proceeding",
            "link": "/achievements/conferenceproceeding",
            "available": true
        },
        {
            "name": "Journal",
            "link": "/achievements/journal",
            "available": true
        },
        {
            "name": "Award",
            "link": "/achievements/award",
            "available": true
        },
    ]
    
    return(
        <div id='view-single-achievement-list'>
            <div id='TopCollection'>
                <input type="text" placeholder="Click Here To Search Achievement" className="input input-ghost w-9/12 max-w-full" />
                <button className="btn glass bg-light disabled px-12 ">Filter</button>
                <button className="btn glass bg-gray px-12 hover:text-light">Sort</button>
            </div>
            <div id='longAddButton'>
                <AddAchievementButton achievement = {{prop: props }}/>
            </div>
            <BooksPublished prop = {props[0]}/>
            <ConferenceProceedings prop = {props[1]}/>
            <Journals prop = {props[2]}/>
            <Awards prop = {props[3]}/> 
        </div>
    );
}

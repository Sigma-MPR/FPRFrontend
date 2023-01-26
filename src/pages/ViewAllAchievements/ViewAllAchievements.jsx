import React from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';
// achievements
import BooksPublished from './components/BooksPublished';
import ConferenceProceedings from './components/ConferenceProceedings';
import Journals from './components/Journals';
import Awards from './components/Awards';

// css
import './ViewAllAchievements.css';
import AddAchievementButton from '../../components/AddAchievementButton/AddAchievementButton';

import mouldData from './sheetFunction';

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
    const [AllAchievements, setAllAchievements] = React.useState({});

    const makeSheet = (achievement, name, workbook) => {
        const data = mouldData(achievement, name);
        var worksheet = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, name);
    }
    const exportAchievements = async () => {
        // export bookspublished with XLSX
        var workbook = XLSX.utils.book_new();
        makeSheet(AllAchievements.BooksPublished, 'Books Published', workbook);
        makeSheet(AllAchievements.ConferenceProceedings, 'Conference Proceedings', workbook);
        makeSheet(AllAchievements.Journals, 'Journals', workbook);
        makeSheet(AllAchievements.awards, 'Awards', workbook);
        XLSX.writeFile(workbook, 'Achievements.xlsx');
    }

    React.useEffect(() => {
        console.log(AllAchievements)
    }, [AllAchievements]);
    return(
        <div id='view-single-achievement-list'>
            <div id='TopCollection'>
                <input type="text" placeholder="Click Here To Search Achievement" className="input input-ghost w-9/12 max-w-full" />
                <button className="btn glass bg-light disabled px-12 " onClick={exportAchievements}>Download</button>
                {/* <button className="btn glass bg-gray px-12 hover:text-light"></button> */}
            </div>
            <div id='longAddButton'>
                <AddAchievementButton achievement = {{prop: props[0] }}/>
            </div>
            <BooksPublished prop = {props[0]} setAllAchievements={setAllAchievements} AllAchievements = {AllAchievements}/>
            <ConferenceProceedings prop = {props[1]} setAllAchievements={setAllAchievements} AllAchievements = {AllAchievements}/>
            <Journals prop = {props[2]} setAllAchievements={setAllAchievements} AllAchievements = {AllAchievements}/>
            <Awards prop = {props[3]} setAllAchievements={setAllAchievements} AllAchievements = {AllAchievements}/> 
        </div>
    );
}

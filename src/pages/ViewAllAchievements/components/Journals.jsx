import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { getAchievementsWithApiCall } from '../../../components/functions';
import ViewAllAchievementsAchievement from '../../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import { CustomToastContainer } from '../../../components/Toast/Toast';
import '../ViewAllAchievements.css'; 
import AchievementNotFound from '../../../components/ViewAllAchivementsAchivement/AchievementFNF/AchievementNotFound';

const Journals = () => {
    const Location = useLocation()

    const [Journals, setAllJournals]= useState({});
    const [isLoading, setLoading]= useState(true);
    useEffect(() => {
        getAchievementsWithApiCall('Journal', setAllJournals).then(() => {
            setLoading(false);
        });
    },
        [])
useEffect(()=>{},[Journals])
return(
    <div>
        <div>
                <h1 className="text-4xl font-bold text-center underline" style={{
                    color: '#0389FF'
                }}>Journals</h1>
            </div>
            <div id='CardsContainer'>
                {isLoading
                    ?
                    <Loader />
                    :
                    (Journals && Journals.data && Journals.data.length > 0?
                        Journals.data.map((book) => {
                        return (
                            <div id='Cards'>
                            <ViewAllAchievementsAchievement achievement={book} category={'Journals'} setAchievementList={setAllJournals}/>
                        </div>
                        )
                    }):
                    <AchievementNotFound/>
                    )
                }
                <CustomToastContainer />
            </div>
            
    </div>
);
}

export default Journals;

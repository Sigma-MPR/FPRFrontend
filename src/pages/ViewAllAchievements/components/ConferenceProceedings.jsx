import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { getAchievementsWithApiCall } from '../../../components/functions';
import ViewAllAchievementsAchievement from '../../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import { CustomToastContainer } from '../../../components/Toast/Toast';
import '../ViewAllAchievements.css'; 
import AchievementNotFound from '../../../components/ViewAllAchivementsAchivement/AchievementFNF/AchievementNotFound';

const ConferenceProceedings = () => {
    const Location = useLocation()
    const [ConferenceProceedings, setAllConferenceProceedings]= useState({});
    const [isLoading, setLoading]= useState(true);
    useEffect(() => {
        getAchievementsWithApiCall('conferenceProceeding', setAllConferenceProceedings).then(() => {
            setLoading(false);
        });
    },
        [])
useEffect(()=>{},[ConferenceProceedings])
return(
    <div>
        <div>
                <h1 className="text-4xl font-bold text-center underline" style={{
                    color: '#1C1258'
                }}>Conference Proceedings</h1>
            </div>
            <div id='ConferenceProceedingsCardsContainer'>
                {isLoading
                    ?
                    <Loader />
                    :
                    (ConferenceProceedings && ConferenceProceedings.data && ConferenceProceedings.data.length > 0?
                        ConferenceProceedings.data.map((book) => {
                        return (
                            <div id='ConferenceProceedingsCards'>
                            <ViewAllAchievementsAchievement achievement={book} category={'ConferenceProceeding'} setAchievementList={setAllConferenceProceedings}/>
                        </div>
                        )
                    }):
                    <AchievementNotFound />
                    )
                }
                <CustomToastContainer />
            </div>
            
    </div>
);
}

export default ConferenceProceedings;
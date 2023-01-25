import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { getAchievementsWithApiCall } from '../../../components/functions';
import ViewAllAchievementsAchievement from '../../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import { CustomToastContainer } from '../../../components/Toast/Toast';
import '../ViewAllAchievements.css'; 
import AchievementNotFound from '../../../components/ViewAllAchivementsAchivement/AchievementFNF/AchievementNotFound';

const ConferenceProceedings = (prop) => {
    const props = prop.prop;
    const {AllAchievements, setAllAchievements} = prop;
    const [ConferenceProceedings, setAllConferenceProceedings]= useState({});
    const [isLoading, setLoading]= useState(true);
    useEffect(() => {
        getAchievementsWithApiCall('conferenceProceeding', setAllConferenceProceedings)
    },
        [])
useEffect(()=>{
    setLoading(false);
    setAllAchievements({...AllAchievements, ConferenceProceedings})
},[ConferenceProceedings])
return(
    <div>
        <div>
                <h1 className="text-4xl font-bold text-center underline" style={{
                    color: '#0389FF'
                }}>Conference Proceedings</h1>
            </div>
            <div id='CardsContainer'>
                {isLoading
                    ?
                    <Loader />
                    :
                    (ConferenceProceedings && ConferenceProceedings.length > 0?
                        ConferenceProceedings.map((book) => {
                        return (
                            <div id='cards'>
                            <ViewAllAchievementsAchievement achievement={book} category={'ConferenceProceeding'} setAchievementList={setAllConferenceProceedings} prop = {props}/>
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
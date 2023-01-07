import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { getAchievementsWithApiCall } from '../../../components/functions';
import ViewAllAchievementsAchievement from '../../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import { CustomToastContainer } from '../../../components/Toast/Toast';
import '../ViewAllAchievements.css'; 

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
            <div id='ConferenceProceedingsCards'>
                {isLoading
                    ?
                    <Loader />
                    :
                    ConferenceProceedings && ConferenceProceedings.data && ConferenceProceedings.data.length > 0 && ConferenceProceedings.data.map((book) => {
                        return (
                            <ViewAllAchievementsAchievement achievement={book} category={'ConferenceProceeding'} setAchievementList={setAllConferenceProceedings}/>
                        )
                    })
                }
                <CustomToastContainer />
            </div>
            
    </div>
);
}

export default ConferenceProceedings;
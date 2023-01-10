import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { getAchievementsWithApiCall } from '../../../components/functions';
import ViewAllAchievementsAchievement from '../../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import { CustomToastContainer } from '../../../components/Toast/Toast';
import '../ViewAllAchievements.css'; 
import AchievementNotFound from '../../../components/ViewAllAchivementsAchivement/AchievementFNF/AchievementNotFound';

const Awards = () => {
    const Location = useLocation()

    const [awards, setAllawards]= useState({});
    const [isLoading, setLoading]= useState(true);
    useEffect(() => {
        getAchievementsWithApiCall('awards', setAllawards).then(() => {
            setLoading(false);
        });
    },
        [])
useEffect(()=>{},[awards])
return(
    <div>
        <div>
                <h1 className="text-4xl font-bold text-center underline" style={{
                    color: '#0389FF'
                }}>Awards</h1>
            </div>
            <div id='CardsContainer'>
                {isLoading
                    ?
                    <Loader />
                    :
                    (awards && awards.data && awards.data.length > 0?
                        awards.data.map((book) => {
                        return (
                            <div id='Cards'>
                            <ViewAllAchievementsAchievement achievement={book} category={'awards'} setAchievementList={setAllawards}/>
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

export default Awards;

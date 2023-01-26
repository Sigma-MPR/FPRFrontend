import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { getAchievementsWithApiCall } from '../../../components/functions';
import ViewAllAchievementsAchievement from '../../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import { CustomToastContainer } from '../../../components/Toast/Toast';
import '../ViewAllAchievements.css'; 
import AchievementNotFound from '../../../components/ViewAllAchivementsAchivement/AchievementFNF/AchievementNotFound';

const Awards = (prop) => {
    const props = prop.prop;
    const {setAllAchievements, AllAchievements} = prop;
    const [awards, setAllawards]= useState({});
    const [isLoading, setLoading]= useState(true);
    useEffect(() => {
        getAchievementsWithApiCall('award', setAllawards)
    },
        [])
useEffect(()=>{
    setLoading(false);
    setAllAchievements({...AllAchievements, awards})
},[awards])
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
                    (awards && awards.length > 0?
                        awards.map((book) => {
                        return (
                            <div id='cards'>
                            <ViewAllAchievementsAchievement achievement={book} category={'Award'} setAchievementList={setAllawards} prop = {props}/>
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

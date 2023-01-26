import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { getAchievementsWithApiCall } from '../../../components/functions';
import ViewAllAchievementsAchievement from '../../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import { CustomToastContainer } from '../../../components/Toast/Toast';
import '../ViewAllAchievements.css'; 
import AchievementNotFound from '../../../components/ViewAllAchivementsAchivement/AchievementFNF/AchievementNotFound';

const BooksPublished = (prop) => {
    const props = prop.prop;
    const {setAllAchievements, AllAchievements} = prop;
    const [BooksPublished, setAllBooksPublished]= useState({});
    const [isLoading, setLoading]= useState(true);
    useEffect(() => {
        getAchievementsWithApiCall('BooksPublished', setAllBooksPublished)
    },
        [])
useEffect(()=>{
    setAllAchievements({...AllAchievements, BooksPublished});
    setLoading(false);
},[BooksPublished])
return(
    <div>
        <div>
                <h1 className="text-4xl font-bold text-center underline" style={{
                    color: '#0389FF'
                }}>Books Published</h1>
            </div>
            <div id='CardsContainer'>
                {isLoading
                    ?
                    <Loader />
                    :
                    (BooksPublished && BooksPublished.length > 0?
                        BooksPublished.map((book) => {
                        return (
                            <div id='cards'>
                            <ViewAllAchievementsAchievement achievement={book} category={'Books Published'} setAchievementList={setAllBooksPublished} prop={props}/>
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

export default BooksPublished;

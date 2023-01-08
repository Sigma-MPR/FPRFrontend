import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { getAchievementsWithApiCall } from '../../../components/functions';
import ViewAllAchievementsAchievement from '../../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import { CustomToastContainer } from '../../../components/Toast/Toast';
import '../ViewAllAchievements.css'; 

const BooksPublished = () => {
    const Location = useLocation()

    const [BooksPublished, setAllBooksPublished]= useState({});
    const [isLoading, setLoading]= useState(true);
    useEffect(() => {
        getAchievementsWithApiCall('bookspublished', setAllBooksPublished).then(() => {
            setLoading(false);
        });
    },
        [])
useEffect(()=>{},[BooksPublished])
return(
    <div>
        <div>
                <h1 className="text-4xl font-bold text-center underline" style={{
                    color: '#1C1258'
                }}>Books Published</h1>
            </div>
            <div id='booksPublishedCardsContainer'>
                {isLoading
                    ?
                    <Loader />
                    :
                    BooksPublished && BooksPublished.data && BooksPublished.data.length > 0 && BooksPublished.data.map((book) => {
                        return (
                            <div id='booksPublishedCards'>
                            <ViewAllAchievementsAchievement achievement={book} category={'bookspublished'} setAchievementList={setAllBooksPublished}/>
                        </div>
                        )
                    })
                }
                <CustomToastContainer />
            </div>
            
    </div>
);
}

export default BooksPublished;

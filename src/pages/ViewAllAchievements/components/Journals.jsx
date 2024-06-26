import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader/Loader';
import { getAchievementsWithApiCall } from '../../../components/functions';
import ViewAllAchievementsAchievement from '../../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import { CustomToastContainer } from '../../../components/Toast/Toast';
// import '../ViewAllAchievements.css'; 
import AchievementNotFound from '../../../components/ViewAllAchivementsAchivement/AchievementFNF/AchievementNotFound';

const Journals = (prop) => {
    const props = prop.prop;
    const {AllAchievements, setAllAchievements} = prop;
    const [Journals, setAllJournals] = useState({});
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        getAchievementsWithApiCall('Journal', setAllJournals)
    },
        [])
    useEffect(() => {
        setLoading(false);
        setAllAchievements({...AllAchievements, Journals});
    }, [Journals])
    return (
        <div >
            <div>
                <h1 className="text-4xl font-bold text-center underline" style={{
                    color: '#0389FF'
                }}>Journals</h1>
            </div>
            <div id='cardsContainer' className='w-full'>
                {isLoading
                    ?
                    <Loader />
                    :
                    (Journals && Journals.length > 0 ?
                        Journals.map((book) => {
                            return (
                                <div id='cards' className='w-full'>
                                    <ViewAllAchievementsAchievement achievement={book} category={'Journal'} setAchievementList={setAllJournals} prop={props} />
                                </div>
                            )
                        }) :
                        <AchievementNotFound />
                    )
                }
                <CustomToastContainer />
            </div>

        </div>
    );
}

export default Journals;

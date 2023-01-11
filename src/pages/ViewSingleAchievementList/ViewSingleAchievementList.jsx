import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AddAchievementButton from '../../components/AddAchievementButton/AddAchievementButton';
import ViewAllAchievementsAchievement from '../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import Loader from '../../components/Loader/Loader';
import { getAchievementsWithApiCall } from '../../components/functions';
import './ViewSingleAchievementList.css';
import AchievementNotFound from '../../components/ViewAllAchivementsAchivement/AchievementFNF/AchievementNotFound';
// import { ToastContainer } from 'react-toastify';

import { CustomToastContainer } from '../../components/Toast/Toast';

const ViewSingleAchievementList = () => {
    const Location = useLocation()

    // Continute Here
    const Achievement = Location.state?.prop.name || localStorage.getItem('Achievement');
    const props = Location.state?.prop || localStorage.getItem('props');
    console.log(JSON.stringify(props));
    const [AchievementList, setAchievementList] = useState({});
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        getAchievementsWithApiCall(Achievement, setAchievementList).then(() => {
            //console.log(AchievementList);
            setLoading(false);
        });
    },
        // eslint-disable-next-line
        [])
    useEffect(() => {
        // //console.log(AchievementList);
    }, [AchievementList])
    return (
        <div id='view-single-achievement-list'>
            <div id='TopCollection'>
                <input type="text" placeholder="Click Here To Search Achievement" className="input input-ghost w-9/12 max-w-full" />
                <button className="btn glass bg-light disabled px-12 text-white ">Filter</button>
                <button className="btn glass bg-gray px-12 text-white hover:text-light">Sort</button>
            </div>
            <div id='longAddButton'>
                <AddAchievementButton achievement={{ prop: props }} />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-center underline" style={{
                    color: '#0389FF'
                }}>{Achievement}</h1>
            </div>
            <div id='cardsContainer' className='w-full'>
                {isLoading
                    ?
                    <Loader />
                    :
                    (AchievementList && AchievementList.data && AchievementList.data.length > 0 ?
                        AchievementList.data.map((achievement) => {
                            return (
                                <div id='cards' className='w-full'>
                                    <ViewAllAchievementsAchievement achievement={achievement} category={Achievement} setAchievementList={setAchievementList} prop={props} />
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

export default ViewSingleAchievementList;
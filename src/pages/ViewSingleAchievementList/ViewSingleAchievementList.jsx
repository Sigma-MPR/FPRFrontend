import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AddAchievementButton from '../../components/AddAchievementButton/AddAchievementButton';
import ViewAllAchievementsAchievement from '../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import Loader from '../../components/Loader/Loader';
import { getAchievementsWithApiCall } from '../../components/functions';
import './ViewSingleAchievementList.css';
// import { ToastContainer } from 'react-toastify';

import { CustomToastContainer } from '../../components/Toast/Toast';

const ViewSingleAchievementList = () => {
    const Location = useLocation()
    const navigate = useNavigate();
    
    // //console.log(Location.pathname.split('/')[2]);
    // //console.log(Location.state.prop.name);
    // set this to locastorage to come back both two
    
    // Continute Here
    const Achievement = Location.state?.prop.name||localStorage.getItem('Achievement');
    const props = Location.state?.prop||localStorage.getItem('props');
    //console.log(props);
    localStorage.setItem('Achievement', Achievement);
    localStorage.setItem('props', JSON.stringify(props));
    // //console.log(Achievement.state.prop.name);
    // alert(Achievement);
    const [AchievementList, setAchievementList] = useState({});
    const [isLoading, setLoading] = useState(true);
    // const [AchievementList, setAchievementList] = useState(getAchievementsWithApiCall());
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
        <div>
            <div id='TopCollection'>
                <input type="text" placeholder="Click Here To Search Achievement" className="input input-ghost w-9/12 max-w-full" />
                <button className="btn glass bg-secondary disabled px-12 ">Filter</button>
                <button className="btn glass bg-primary px-12">Sort</button>
            </div>
            <div id='longAddButton'>
                <AddAchievementButton achievement = {{prop: props}} />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-center text-white underline">{Achievement}</h1>
            </div>
            <div id='cardsContainer'>
                {isLoading
                    ?
                    <Loader />
                    :
                    AchievementList && AchievementList.data && AchievementList.data.length > 0 && AchievementList.data.map((achievement) => {
                        return (
                            <ViewAllAchievementsAchievement achievement={achievement} category={Achievement} setAchievementList={setAchievementList}/>
                        )
                    })
                }
                <CustomToastContainer />
            </div>
        </div>
    );
}

export default ViewSingleAchievementList;
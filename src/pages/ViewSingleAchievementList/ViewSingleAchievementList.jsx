import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AddAchievementButton from '../../components/AddAchievementButton/AddAchievementButton';
import ViewAllAchievementsAchievement from '../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import Loader from '../../components/Loader/Loader';
import { getAchievementsWithApiCall } from '../../components/functions';
import './ViewSingleAchievementList.css';
import AchievementNotFound from '../../components/ViewAllAchivementsAchivement/AchievementFNF/AchievementNotFound';

import { CustomToastContainer } from '../../components/Toast/Toast';

const ViewSingleAchievementList = () => {
    const Location = useLocation()

    const Achievement = Location.state?.prop.name || localStorage.getItem('Achievement');
    const props = Location.state?.prop || localStorage.getItem('props');
    console.log(JSON.stringify(props));
    const [AchievementList, setAchievementList] = useState([]);
    const [search, setSearch] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        getAchievementsWithApiCall(Achievement, setAchievementList, setSearch).then(() => {
            setLoading(false);
        })
    },
        // eslint-disable-next-line
        [])
    useEffect(() => {
        // setSearch(JSON.parse(localStorage.getItem('search')) || AchievementList);
        setSearch(JSON.parse(localStorage.getItem('search')));
    }, [AchievementList])
    
    return (
        <div id='view-single-achievement-list'>
            <div id='TopCollection'>
                <input type="text" placeholder="Click Here To Search Achievement" className="input input-ghost w-9/12 max-w-full" onChange={
                    (e) => {
                        setAchievementList(
                            search.filter(achievement => {
                                if(achievement.paperTitle)
                                    return achievement.paperTitle.toLowerCase().includes(e.target.value.toLowerCase());
                                else if(achievement.title)
                                    return achievement.title.toLowerCase().includes(e.target.value.toLowerCase());
                                else if(achievement.awardName)
                                    return achievement.awardName.toLowerCase().includes(e.target.value.toLowerCase());
                            })
                        );
                    }
                } />
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
                    (AchievementList.length > 0 ?
                        AchievementList.map((achievement) => {
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
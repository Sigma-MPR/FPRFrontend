import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AddAchievementButton from '../../components/AddAchievementButton/AddAchievementButton';
import ViewAllAchievementsAchievement from '../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import { getAchievementsWithApiCall } from '../../components/functions';
import './ViewSingleAchievementList.css';

const ViewSingleAchievementList = () => {
    const Achievement = useLocation().state.name;
    // alert(Achievement);
    const [AchievementList, setAchievementList] = useState({});
    // const [AchievementList, setAchievementList] = useState(getAchievementsWithApiCall());
    useEffect(() => {
        getAchievementsWithApiCall(Achievement, setAchievementList).then(()=>{
            console.log(AchievementList);
        });
    },
    // eslint-disable-next-line
    [])
    useEffect(() => {
        console.log(AchievementList);
    }, [AchievementList])
    return (
        <div>
            <div id='TopCollection'>
                <input type="text" placeholder="Click Here To Search Achievement" className="input input-ghost w-9/12 max-w-full" />
                <button className="btn glass bg-secondary disabled px-12 ">Filter</button>
                <button className="btn glass bg-primary px-12">Sort</button>
            </div>
            <div id='longAddButton'>
                <AddAchievementButton />
            </div>
            <div>
                <h1 className="text-4xl font-bold text-center text-white underline">{Achievement}</h1>
            </div>
            <div id='cardsContainer'>
                {
                    AchievementList&&AchievementList.data&&AchievementList.data.length>0&&AchievementList.data.map((achievement) => {
                        return (
                            <ViewAllAchievementsAchievement achievement = {achievement} category = {Achievement} setAchievementList = {setAchievementList}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ViewSingleAchievementList;
import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AddAchievementButton from '../../components/AddAchievementButton/AddAchievementButton';
import ViewAllAchievementsAchievement from '../../components/ViewAllAchivementsAchivement/ViewAllAchievementsAchievement';
import { ACHIEVEMENT_API } from "../../constants";
import './ViewSingleAchievementList.css';
const getAchievementsWithApiCall = async (achievement, setAchievementList) => {
    let str = achievement.split(' ').join('').toLowerCase();
    const apiToCall = `${ACHIEVEMENT_API}/achievements/${str}/all`;
    console.log(apiToCall);
    const response = await fetch(apiToCall, {
        method: 'POST',
    });
    const data = await response.json();
    console.log(data);
    setAchievementList(data);
    return data;
}
const ViewSingleAchievementList = () => {
    const Achievement = useLocation().state.name;
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
                <button className="btn glass bg-secondary disabled ">Glass button</button>
                <button className="btn glass bg-primary">Glass button</button>
            </div>
            <div id='longAddButton'>
                <AddAchievementButton />
            </div>
            <div id='cardsContainer'>
                {
                    AchievementList&&AchievementList.data&&AchievementList.data.length>0&&AchievementList.data.map((achievement) => {
                        return (
                            <ViewAllAchievementsAchievement achievement = {achievement}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ViewSingleAchievementList;
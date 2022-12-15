import React from 'react';
import { useState, useEffect } from 'react';
import AddAchievementButton from '../../components/AddAchievementButton/AddAchievementButton';
import './ViewSingleAchievementList.css';
const getAchievementsWithApiCall = async (achievement) => {
    const response = await fetch(`http://localhost:3001/${achievement}`);
    const data = await response.json();
    return data;
}
const ViewSingleAchievementList = (props) => {
    const {achievement} = props;
    const [AchievementList, setAchievementList] = useState(getAchievementsWithApiCall());
    useEffect(() => {
        console.log(props);
    }, [])
    return (
        <div>
            <div id='TopCollection'>
                <input type="text" placeholder="Click Here To Search Achievement" className="input input-ghost w-9/12 max-w-full" />
                <button className="btn glass bg-secondary disabled ">Glass button</button>
                <button className="btn glass bg-primary">Glass button</button>
            </div>
            <AddAchievementButton />
            <h1>View Single Achievement List</h1>
            <p>View Single Achievement List</p>
        </div>
    );
}

export default ViewSingleAchievementList;
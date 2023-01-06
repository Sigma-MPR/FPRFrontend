import React from "react";
import './DashboardCards.css'
import { Link } from 'react-router-dom'
import AddAchievementButton from '../AddAchievementButton/AddAchievementButton'
export default function DashboardCards(props) {

    return (
        <span id="DashboardCard" className={props.available ? "show" : "soon"} title={props.available ? props.name : "Feature Coming Soon"} disabled>
            <div className="dashboardCard w-full max-w-sm p-2 bg-lavender border rounded-lg shadow-md sm:p-5 ">
                <Link to={props.available ? props.link : "/"} className="DashboardCardLink" state={{prop: props}}> 
                    <h5 className=" mb-4 font-semibold text-blue">Achievement Category</h5>
                    <div className="flex items-baseline pb-1">
                        <span className="text-black leading-5 text-lg font-semibold ml-2 mb-2 content-center" >
                           
                            {props.name}</span>
                    </div>
                </Link>
                <AddAchievementButton achievement = {{prop: props}}/>
            </div>
        </span>
    );
}
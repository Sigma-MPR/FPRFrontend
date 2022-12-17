import React from "react";
import './DashboardCards.css'
import { Link } from 'react-router-dom'
import AddAchievementButton from '../AddAchievementButton/AddAchievementButton'
export default function DashboardCards(props) {

    return (
        <span id="DashboardCard" className={props.available ? "show" : "soon"} title={props.available ? props.name : "Feature Coming Soon"} disabled>
            <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-7 dark:bg-gray-800 dark:border-gray-700">
                <Link to={props.available ? props.link : "/"} className="DashboardCardLink" state={{name: props.name}}>
                    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Achievement Category</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-2xl font-semibold">{props.name}</span>
                    </div>
                </Link>
                <AddAchievementButton props/>
            </div>
        </span>
    );
}
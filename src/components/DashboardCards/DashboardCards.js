import React from "react";
import './DashboardCards.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
export default function DashboardCards(props) {

    return (
        <span id="DashboardCard" className={props.available ? "show" : "soon"} title={props.available ? props.name : "Feature Coming Soon"} disabled>
            <div className="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-7 dark:bg-gray-800 dark:border-gray-700">
                <Link to={props.available ? props.link : "/"} className="DashboardCardLink">
                    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Achievement Category</h5>
                    <div className="flex items-baseline text-gray-900 dark:text-white">
                        <span className="text-2xl font-semibold">{props.name}</span>
                    </div>
                </Link>
                <Link to={"/addachievement"} state={{ name: props.name }} >
                        <Button available={props.available} text="Add New" />
                </Link>
            </div>
        </span>
    );
}
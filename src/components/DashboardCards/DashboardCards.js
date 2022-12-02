import React from "react";
import './DashboardCards.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
export default function DashboardCards(props) {

    return (
        <span id="DashboardCard" className={props.available ? "show" : "soon"} title={props.available ? props.name : "Feature Coming Soon"} disabled>
            <Link to={props.available ? props.link : "/"} className="DashboardCardLink">
                <div class="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-7 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Achievement Category</h5>
                    <div class="flex items-baseline text-gray-900 dark:text-white">
                        <span class="text-2xl font-semibold">{props.name}</span>
                    </div>
                    <Link to={"/addachievement"} className="DashboardCardLink">
                        <Button available={props.available} text="Add New" />
                    </Link>
                </div>
            </Link>
        </span>
    );
}
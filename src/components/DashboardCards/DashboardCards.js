import React from "react";
import './DashboardCards.css'
export default function DashboardCards(props) {

    return (
        <span id="DashboardCard" className={props.available?"show":"soon"} title={props.available?props.name:"Feature Coming Soon"}>
            <div class="w-full max-w-sm p-4 bg-white border rounded-lg shadow-md sm:p-7 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Achievement Category</h5>
                <div class="flex items-baseline text-gray-900 dark:text-white">
                    <span class="text-2xl font-semibold">{props.name}</span>
                </div>
                <button type="button" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Add New</button>
            </div>
        </span>
    );
}
import React from "react";
import './DashboardCards.css'
import { Link } from 'react-router-dom'
import AddAchievementButton from '../AddAchievementButton/AddAchievementButton'
export default function DashboardCards(props) {
    // console.log(props)
    return (
        <span  id="DashboardCard" className="show lg:w-1/5 w-full mx-5 text-center" title={props.available ? props.name : "Feature Coming Soon"} disabled >
            <div className="dashboardCard w-full max-w-sm p-2 bg-light-beige border rounded-lg shadow-md sm:p-5 ">
                <Link to={props.available ? props.link : "/"} className="DashboardCardLink" state={{prop: props}}> 
                    {
                        props.name == "View All" ? null:
                        <h5 className=" mb-4 font-semibold text-blue">Achievement Category</h5>
                    }
                    <div className="flex items-baseline pb-1">
                        <span className="text-black leading-5 text-lg font-semibold mx-auto mb-2 content-center text-center" >
                           
                            {props.name == "View All" ? "View All Achievements":props.name}
                            </span>
                    </div>
                </Link>
                {
                props.name != "View All"?
                <AddAchievementButton achievement = {{prop: props}}/>
                :
                null
                }
            </div>
        </span>
    );
}
import React from "react";
import './DashboardCards.css'
import { Link } from 'react-router-dom'
import AddAchievementButton from '../AddAchievementButton/AddAchievementButton'
export default function DashboardCards(props) {
    // console.log(props)
    return (
        <span id="DashboardCard" className="show lg:w-1/5 w-full mx-5 text-center" title={props.available ? props.name : "Feature Coming Soon"} disabled >
            <div className="dashboardCard">
                <Link to={props.available ? props.link : "/"} className="DashboardCardLink" state={{ prop: props }}>
                    {
                        props.name == "View All" ? null :
                            <h5 className="card-title">Achievement Category</h5>
                    }
                    <div>
                        <span className="card-subtitle">
                            {props.name == "View All" ? "View All Achievements" : props.name}
                        </span>
                    </div>
                </Link>
                {
                    props.name != "View All" ?
                        <AddAchievementButton achievement={{ prop: props }} />
                        :
                        null
                }
            </div>
        </span>
    );
}
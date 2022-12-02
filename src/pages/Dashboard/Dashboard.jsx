import React from "react";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import "./Dashboard.css";
const AchievementArray = [
    {
        "name": "Books Published",
        "link": "/achievements/books",
        "available": true
    },
    {
        "name": "Conference Proceedings",
        "link": "/achievements/conference",
        "available": true
    },
    {
        "name": "Attended Events",
        "link": "/achievements/books",
        "available": false
    },
    {
        "name": "Organized Seminars",
        "link": "/achievements/conference",
        "available": false
    },
    {
        "name": "Journals",
        "link": "/achievements/books",
        available: false
    },
    {
        "name": "Student Activities",
        "link": "/achievements/conference",
        "available": false
    },
    {
        "name": "Projects",
        "link": "/achievements/books",
        available: false
    },
    {
        "name": "View All",
        "link": "/achievements/All",
        available: true
    }
]
export default function Dashboard() {
    return (
        <div id="DashboardContainer">
        {
            AchievementArray.map((item, index) => {
                return (
                        <DashboardCards name={item.name} link={item.link} available={item.available}/>
                )
            })
        }
        </div>
    );
}
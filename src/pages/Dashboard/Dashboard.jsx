import React from "react";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import "./Dashboard.css";
const AchievementArray = [
    {
        "name": "Books Published",
        "link": "/achievements/bookspublished",
        "available": true
    },
    {
        "name": "Conference Proceedings",
        "link": "/achievements/conferenceproceedings",
        "available": true
    },
    {
        "name": "Attended Events",
        "link": "/achievements/attendedevents",
        "available": false
    },
    {
        "name": "Organized Seminars",
        "link": "/achievements/oraganizedseminars",
        "available": false
    },
    {
        "name": "Journals",
        "link": "/achievements/journals",
        "available": false
    },
    {
        "name": "Student Activities",
        "link": "/achievements/studentactivities",
        "available": false
    },
    {
        "name": "Projects",
        "link": "/achievements/projects",
        "available": false
    },
    {
        "name": "View All",
        "link": "/achievements/All",
        "available": true
    }
]
export default function Dashboard() {
    return (
        <div id="DashboardContainer">
        {
            AchievementArray.map((item, index) => {
                return (
                        <DashboardCards name={item.name} link={item.link} available={item.available} key={index}/>
                )
            })
        }
        </div>
    );
}
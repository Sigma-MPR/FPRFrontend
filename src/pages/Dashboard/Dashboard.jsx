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
        "name": "Conference Proceeding",
        "link": "/achievements/conferenceproceedings",
        "available": true
    },
    {
        "name": "Journals",
        "link": "/achievements/journals",
        "available": true
    },
    {
        "name": "Awards",
        "link": "/achievements/awards",
        "available": true
    },
    // {
    //     "name": "View All",
    //     "link": "/achievements/All",
    //     "available": true
    // },
    // {
    //     "name": "Attended Events",
    //     "link": "/achievements/attendedevents",
    //     "available": false
    // },
    // {
    //     "name": "Organized Seminars",
    //     "link": "/achievements/oraganizedseminars",
    //     "available": false
    // },
    // {
    //     "name": "Student Activities",
    //     "link": "/achievements/studentactivities",
    //     "available": false
    // },
    // {
    //     "name": "Projects",
    //     "link": "/achievements/projects",
    //     "available": false
    // }
]
export default function Dashboard() {
    return (
        <div className="Dashboard-Whole">
            <div id="DashboardContainer" className="">
                {
                    AchievementArray.map((item, index) => {
                        return (
                            <DashboardCards name={item.name} link={item.link} available={item.available} key={index} />
                        )
                    })
                }
            </div>
            <div className="ViewAllBtn">
                <a href="/achievements/All"> View All </a>
            </div>
        </div>
    );
}
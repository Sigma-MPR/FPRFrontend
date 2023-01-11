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
        "link": "/achievements/conferenceproceeding",
        "available": true
    },
    {
        "name": "Journal",
        "link": "/achievements/journal",
        "available": true
    },
    {
        "name": "Award",
        "link": "/achievements/award",
        "available": true
    },
    {
        "name": "View All",
        "link": "/achievements/All",
        "available": true
    },
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
        <div id="DashboardContainer" className="" style={{
            backgroundImage: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)",
            height: "85.5vh",
            paddingTop: "5vh",
        }}>
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
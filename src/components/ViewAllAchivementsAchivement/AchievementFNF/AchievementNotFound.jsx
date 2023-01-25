import React from "react";
import NotFound from './NotFound.png';
import '../../../pages/ViewSingleAchievementList/ViewSingleAchievementList.css'

export default function AchievementNotFound() {
    return (
        <div id="cards">
            <div className="flex justify-center ">
                <img src={NotFound} className='w-64 rounded-xl' alt="No Achievements Found"/>
                </div>
                <div>
                <h2 className="text-2xl font-semibold text-center" style={{
                    color: '#1C1258'
                }}>No Achievement Found!</h2>

                </div>
                
            
        </div>

    );
}
import React from 'react'
import { deleteAchievement } from '../functions'
import { useNavigate } from 'react-router-dom'
import './ViewAllAchievementsAchievement.css'
import { ToastPromise } from '../Toast/Toast'

const string = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."

const ViewAllAchievementsAchievement = (props) => {
    // alert(props.category)
    const navigate = useNavigate()
    const achievement = props.achievement
    return (
        <>
            <div className="card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{props.achievement.title || props.achievement.paperTitle || "props.title"}</h2>
                    <p>{props.achievement.remarks || string.slice(0, 256) || "props.remarks"}...</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary mx-3	">Modify</button>
                        <button className="btn btn-secondary mx-3" onClick={() => ToastPromise(deleteAchievement(props.achievement.id, props.category, props.setAchievementList))}>Delete</button>
                    </div>
                </div>
                <div id="createdAt">
                    <p className="text-center text-neutral-content">Created At: {props.achievement.createdAt || "props.createdAt"}</p>
                </div>
            </div>
        </>
    )
}
export default ViewAllAchievementsAchievement;
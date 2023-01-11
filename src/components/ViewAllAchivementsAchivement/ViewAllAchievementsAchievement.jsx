import React from 'react'
import { deleteAchievement } from '../functions'
import { useNavigate, useLocation } from 'react-router-dom'
import './ViewAllAchievementsAchievement.css'
import { ToastPromise } from '../Toast/Toast'
import { toast } from 'react-toastify'

const string = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."

const toastAndDelete = async (id, category, setAchievementList, e) => {
    e.stopPropagation();
    await ToastPromise(deleteAchievement(id, category, setAchievementList), "Deleting Achievement", "Deleted Successfully", "Error Deleting Achievement")
}
const ViewAllAchievementsAchievement = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const achievement = props.achievement;
    const category = props.category;
    const prop = props.prop||location.state.props;

    return (
        <>
            <div id="card" className="card bg-neutral text-neutral-content">
                <div className="card-body flex flex-row">
                    <img className='w-16 h-16 lg:mr-20' src='/images/edit.png' onClick={(e) => toastAndDelete(props.achievement.id, props.category, props.setAchievementList, e)} />
                    <div onClick={() => {
                        navigate('/achievements/view', { state: { prop: achievement, category, propData: prop, edit: 'true' } })
                    }}
                        className='cursor-pointer'
                    >
                        <div>
                        <h2 className="card-title mx-auto justify-center lg:inline">{props.achievement.title ? "Title: " : (props.achievement.paperTitle?"Paper Title: ":"Award Name: ")}</h2>
                        <h2 className="card-title mx-auto justify-center lg:inline">{props.achievement.title || props.achievement.paperTitle || props.achievement.awardName||"props.title"}</h2>
                        </div>
                        <div>
                        <p className="text-neutral-content content-center lg:inline">{props.achievement.pubDate?"Publishing Date: ":"Award Date: "} </p>
                        <p className="text-neutral-content content-center lg:inline">{new Date(props.achievement.pubDate||props.achievement.awardDate).toString().slice(0, 15) || "props.createdAt"}</p>
                        </div>
                    </div>
                    <img className='w-16 h-16 lg:ml-20' src='/images/delete.png' onClick={(e) => toastAndDelete(props.achievement.id, props.category, props.setAchievementList, e)} />
                </div>
            </div>
        </>
    )
}
export default ViewAllAchievementsAchievement;
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
    // toast.success("Deleted Successfully")
}
const ViewAllAchievementsAchievement = (props) => {
    // const [Loading, setLoading] = React.useState(false)
    // alert(props.category)
    const navigate = useNavigate()
    const location = useLocation()
    const achievement = props.achievement;
    const category = props.category;
    const prop = location.state.prop;
    // console.log(prop);

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
                        <h2 className="card-title mx-auto justify-center lg:inline">{props.achievement.title ? "Title: " : "Paper Title: "}</h2>
                        <h2 className="card-title mx-auto justify-center lg:inline">{props.achievement.title || props.achievement.paperTitle || "props.title"}</h2>
                        </div>
                        <div>
                        <p className="text-neutral-content content-center lg:inline">Publishing Date: </p>
                        <p className="text-neutral-content content-center lg:inline">{new Date(props.achievement.pubDate).toString().slice(0, 15) || "props.createdAt"}</p>
                        </div>
                    </div>
                    <img className='w-16 h-16 lg:ml-20' src='/images/delete.png' onClick={(e) => toastAndDelete(props.achievement.id, props.category, props.setAchievementList, e)} />
                </div>
            </div>
        </>
    )
}
export default ViewAllAchievementsAchievement;
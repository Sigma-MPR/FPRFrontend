import React from 'react'
import { deleteAchievement } from '../functions'
import { useNavigate, useLocation } from 'react-router-dom'
import './ViewAllAchievementsAchievement.css'
import { ToastPromise } from '../Toast/Toast'
import { toast } from 'react-toastify'

const string = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."

const toastAndDelete = async(id, category, setAchievementList, e) => {
    e.stopPropagation();
    await ToastPromise(deleteAchievement(id, category, setAchievementList), "Deleting Achievement","Deleted Successfully", "Error Deleting Achievement")
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
            <div className="card w-96 bg-neutral text-neutral-content" onClick={() => {
                //console.log(achievement);
                navigate('/achievements/view', { state: { prop: achievement, category, propData: prop } })
            }
            } >
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{props.achievement.title || props.achievement.paperTitle || "props.title"}</h2>
                    <p>{props.achievement.remarks || string.slice(0, 256) || "props.remarks"}...</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-primary mx-3">Modify</button>
                        <button className="btn btn-outline btn-secondary mx-3" onClick={(e) => toastAndDelete(props.achievement.id, props.category, props.setAchievementList, e)}>Delete</button>
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
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
            <div id = "card" className="card bg-neutral text-neutral-content" onClick={() => {
                //console.log(achievement);
                navigate('/achievements/view', { state: { prop: achievement, category, propData: prop } })
            }
            } >
                <div className="card-body items-center text-start ">
                    <h2 className="card-title">{props.achievement.title?"Title: ":"Paper Title: "}{props.achievement.title || props.achievement.paperTitle || "props.title"}</h2>
                    <p className="text-neutral-content">Publishing Date: {new Date(props.achievement.pubDate).toString().slice(0,15) || "props.createdAt"}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-secondary mx-3" onClick={(e) => toastAndDelete(props.achievement.id, props.category, props.setAchievementList, e)}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewAllAchievementsAchievement;
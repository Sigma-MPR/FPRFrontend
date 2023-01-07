import React, {useEffect, useState} from "react";
import {  useNavigate, useLocation } from "react-router-dom";
import "./AddAchievement.css"; 
import {getFieldsByAPI, makefields} from '../AddAchievement/functions';
import { updateAchievementApiFunction } from "../AddAchievement/functions";
import { ToastPromise } from "../../components/Toast/Toast";

 
const ViewSingleAchievement = () => {
    // alert('hi');</>
    const navigate = useNavigate();
    const Location = useLocation();
    const Achievement = Location.state?.prop;
    const Category = Location.state?.category;
    // console.log(Achievement);
    // console.log(Category);
    const [Loading, setLoading] = useState(true);
    const [AchievementSchemaData, setAchievementSchemaData] = useState({});
    const [AchievementId, setAchievementId] = useState('');
    useEffect(() => {
        setLoading(true);
        getFieldsByAPI(Category.split(" ").join(""), setAchievementSchemaData)
    }, []);
    useEffect(() => {
        document.querySelector("#fields").innerHTML = '';
        setLoading(true);
        makefields(AchievementSchemaData, setLoading, Achievement)
        setAchievementId(Achievement.id);
        // console.log(Achievement.id);
        // ToastSuccess("Input Modal Made");
    }, [AchievementSchemaData]);
    const updateAndToast = async(e, type, id) => {
        await ToastPromise(updateAchievementApiFunction(e, Category, id), "Updating Achievement", "Achievement Updated Successfully", "Error Updating Achievement");
        //     navigate(`/achievements/bookspublished`);
    }
        return (
            <>
            <div className="bg-blue">
                <div className="grid grid-cols-2 my-6 pt-4"><h1 className="text-center leading-3 text-white py-3">View Single Achievement</h1> 
                <div className="btn-div">
                    <button className="update-btn text-black bg-lavender hover:bg-800 focus:ring-4 focus:outline-none hover:bg-yellow font-medium rounded-lg text-md  mt-0 w-full sm:w-auto mb-2 px-8 py-2.5 text-center dark:focus:ring-blue-200" onClick={() => navigate(-1)}>Go Back</button>
                </div>
                </div>
                <div className=" main-div  w-1/2 bg-light  md:w-1/2 ml-auto mr-auto mb-4 mt-3 border leading-6 px-2 py-2.5 rounded-2xl ">
                <form id="" className="add-achievementform">
                <div className="" id="addAchievement ">
      
                <div id="fields" className="add-achievement mb-3 bg-light mt-5 p-5 border rounded-xl ml-auto mr-auto shadow-md shadow-gray">
                    <div id="sub-fields" className="achievement-field mb-3"></div>
                </div>
                <div className="btn-div mt-0 ">
                            <button type="submit" className="update-btn bg-blue text-white hover:bg-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-md hover:bg-yellow mt-0 w-full sm:w-auto px-8 py-2.5 text-center dark:focus:ring-blue-200" value = {Category} 
                        onClick={(e)=>updateAndToast(e, Category, AchievementId)}>UPDATE</button>
                    </div>
                </div>
                </form>
                </div>
                </div>
            </>
        );
    }
    

export default ViewSingleAchievement;
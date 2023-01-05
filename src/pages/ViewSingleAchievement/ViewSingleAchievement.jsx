import React, {useEffect, useState} from "react";
import {  useNavigate, useLocation } from "react-router-dom";
import {getFieldsByAPI, makefields} from '../AddAchievement/functions';
import { updateAchievementApiFunction } from "../AddAchievement/functions";
import { ToastPromise } from "../../components/Toast/Toast";

const ViewSingleAchievement = () => {
    // alert('hi');</>
    const navigate = useNavigate();
    const Location = useLocation();
    const Achievement = Location.state?.prop;
    const Category = Location.state?.category;
    console.log(Achievement);
    console.log(Category);
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
                <h1>View Single Achievement</h1>
                <div>
                    <button onClick={() => navigate(-1)}>Go Back</button>
                </div>
                <form id="fields" className="add-achievement">
                    </form>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value = {Category} 
                        onClick={(e)=>updateAndToast(e, Category, AchievementId)}>Update</button>

            </>
        );
    }
    

export default ViewSingleAchievement;
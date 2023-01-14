import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./AddAchievement.css";
import { getFieldsByAPI, makefields } from '../AddAchievement/functions';
import { updateAchievementApiFunction } from "../AddAchievement/functions";
import { ToastPromise } from "../../components/Toast/Toast";


const ViewSingleAchievement = () => {
    const navigate = useNavigate();
    const Location = useLocation();
    const Achievement = Location.state?.prop;
    const Category = Location.state?.category;
    const [Loading, setLoading] = useState(true);
    const [AchievementSchemaData, setAchievementSchemaData] = useState({});
    const [AchievementId, setAchievementId] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        setLoading(true);
        getFieldsByAPI(Category.split(" ").join(""), setAchievementSchemaData)
    }, []);
    useEffect(() => {
        document.querySelector("#fields").innerHTML = '';
        setLoading(true);
        makefields(AchievementSchemaData, setLoading, Achievement)
        setAchievementId(Achievement.id);
        document.querySelectorAll("input").forEach((item) => {
            // disable if isDisabled is true
            item.disabled = isDisabled;
        });
    }, [AchievementSchemaData, isDisabled]);
    const updateAndToast = async (e, type, id) => {
        e.preventDefault();
        if(isDisabled){
            setIsDisabled(false);
            return;
        }
        const res = await updateAchievementApiFunction(e, Category, id);
        if(res){
            navigate(-1);
        }
        setIsDisabled(true);
    }
    return (
        <main>
            <div className=" rootS">
                <div className="grid grid-cols-2 my-6 pt-4"><h1 className="text-center leading-3 text-white py-3 text-2xl">View Single Achievement</h1>
                    <div className="btn-div">
                        <button className="update-btn text-black bg-light-beige hover:bg-800 focus:ring-4 focus:outline-none hover:bg-lavendar font-medium rounded-lg text-md  mt-0 w-full sm:w-auto mb-2 px-8 py-2.5 text-center dark:focus:ring-blue-200" onClick={() => navigate(-1)}>Go Back</button>
                    </div>
                </div>
                <div className=" main-div  w-1/2 bg-light  md:w-1/2 ml-auto mr-auto mb-4 mt-3  leading-6 px-2 py-2.5 rounded-2xl " >
                    <form id="" className="add-achievementform" >
                        <div className="" id="addAchievement " >

                            <div id="fields" className="add-achievement mb-3 bg-light mt-5 p-5  rounded-xl ml-auto mr-auto " style={{border:"none",boxShadow:"none"}}>
                                <div id="sub-fields" className="achievement-field mb-3"></div>
                            </div>
                            <div className="btn-div mt-0 ">
                                <button type="submit" className="update-btn mb-5 bg-light text-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-md hover:bg-primary-400 mt-0 w-full sm:w-auto px-8 py-2.5 text-center dark:focus:ring-blue-200" value={Category}
                                    onClick={(e) => updateAndToast(e, Category, AchievementId)}
                                    >
                                        {
                                            isDisabled ? "Edit" : "Update"
                                        }
                                    </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}


export default ViewSingleAchievement;
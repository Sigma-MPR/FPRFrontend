import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AddAchievement.css"; 
import { AchievementDropDown } from "../../constants";
import {makefields, addAchievementApiFunction, getFieldsByAPI} from './functions';
import Loader from "../../components/Loader/Loader";
import LoaderBtn from "../../components/loaderButton/LoaderButton";

import {CustomToastContainer,ToastSuccess, ToastPromise} from "../../components/Toast/Toast";
const tempMap = {
    "BP": "BooksPublished",
    "CP": "ConferenceProceedings",
    "JR" : "Journal",
    "AW": "Award"
}
const AddAchievement = () => {
    const location = useLocation();
    console.log(location.state);
    const prop = location.state.name == "View All" ? "Books Published" :location.state.name;
    const [achievement, setAchievement] = useState(AchievementDropDown[prop]||"BP");
    const [AchievementSchemaData, setAchievementSchemaData] = useState({});
    const [Loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        setLoading(true);
        getFieldsByAPI(tempMap[AchievementDropDown[prop]], setAchievementSchemaData)
    },
    // eslint-disable-next-line
    []);

    useEffect(() => {
        document.querySelector("#fields").innerHTML = '';
        setLoading(true); 
        makefields(AchievementSchemaData, setLoading)
    }, [AchievementSchemaData]);
    
    const changeOption = (e) => {
        document.querySelector("#fields").innerHTML = '';
        setLoading(true);
        ToastSuccess("Model Changed");
        setAchievement(e.target.value);
        getFieldsByAPI(tempMap[e.target.value], setAchievementSchemaData)
    };
    
    const addAndToast = async(e, type) => {
        await ToastPromise(addAchievementApiFunction(e, tempMap[achievement]), "Adding Achievement","Achievement Added", "Error Adding Achievement")
        .then((resp)=>{
          navigate(-1);
        })
    }
    let flag = false;
    return (
        <main>
        <div className="root">
        <div className=" main-div  w-1/2   md:w-1/2 ml-auto mr-auto mb-4 mt-3 border leading-6 px-2 py-2.5 rounded-2xl ">
            <form className="">
                <div className="" id="addAchievement ">
                    <div className="add-achievement w-full">
                        <label htmlFor="achievement" className="inline text-base mb-3 mt-4 py-4 font-semibold text-black leading-5 ">CHOOSE ACHIEVEMENT TYPE</label>
                            
                        <select id="achievement" className="bg-gray-50 border text-sm rounded-lg focus:ring-gray-500  block w-full p-2.5 mt-2 mb-2 dark:text-black dark:focus:ring-gray-500 dark:focus:border-blue-500 " onChange={changeOption}>
                            {
                                // eslint-disable-next-line
                                Object.keys(AchievementDropDown).map((item, index) => {
                                    if (item === prop) {
                                        flag = true;
                                    }
                                })
                            }
                            {
                                flag?
                                Object.keys(AchievementDropDown).map((item, index) => {
                                    if (item !== prop) {
                                        return <option value={AchievementDropDown[item]} key={index}>{item}</option>
                                    }
                                    else
                                        return <option selected value={AchievementDropDown[item]} key = {index}>{item}</option>
                                }):
                                Object.keys(AchievementDropDown).map((item, index) => {
                                    if (item === 'Books Published') {
                                        return <option selected value={AchievementDropDown[item]} key = {index}>{item}</option>
                                    }
                                    else
                                        return <option value={AchievementDropDown[item]} key={index}>{item}</option>
                                })
                            }
                        </select>
                    </div>
                    {Loading&&<Loader />}
                    <div id="fields" className="  mb-3  mt-5 p-5  rounded-xl ml-auto mr-auto bg-lavendar" style={{border:"none",boxShadow:"none"}}>

                        <div id="sub-fields" className="achievement-field mb-3"></div>
                    </div>
                   
                </div>
                <div className="btn-div mt-0">
                <button type="submit" className="submit-btn text-white focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-md mt-0 w-full sm:w-auto px-8 py-2.5 text-cente hover:bg-primary-400" value = {achievement} 
                onClick={(e)=>addAndToast(e, tempMap[achievement])}
                style={{backgroundColor: "#006dea"}}>SUBMIT</button>
                {/* <LoaderBtn type="submit" className="submit-btn text-white focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-md mt-0 w-full sm:w-auto px-8 py-2.5 text-cente hover:bg-primary-400" value = {achievement} onClick={(e)=>addAndToast(e, tempMap[achievement])} style={{backgroundColor: "#006dea"}} display="SUBMIT" /> */}
                </div>
            </form>
           
            <CustomToastContainer/>
        </div> </div>
        </main>


    )
}
export default AddAchievement;
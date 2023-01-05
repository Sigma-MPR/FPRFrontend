import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AddAchievement.css"; 
import { AchievementDropDown } from "../../constants";
import {makefields, addAchievementApiFunction, getFieldsByAPI} from './functions';
import Loader from "../../components/Loader/Loader";
import {CustomToastContainer,ToastSuccess, ToastPromise} from "../../components/Toast/Toast";
const tempMap = {
    "BP": "BooksPublished",
    "CP": "ConferenceProceedings",
}
const AddAchievement = () => {
    const location = useLocation();
    const prop = location.state.name||localStorage.getItem('Achievement');
    // alert(prop);
    const [achievement, setAchievement] = useState(AchievementDropDown[prop]);
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
        // ToastSuccess("Input Modal Made");
    }, [AchievementSchemaData]);
    
    const changeOption = (e) => {
        document.querySelector("#fields").innerHTML = '';
        setLoading(true);
        ToastSuccess("Model Changed");
        setAchievement(e.target.value);
        // console.log(e.target.value);
        // alert(tempMap[e.target.value]);
        getFieldsByAPI(tempMap[e.target.value], setAchievementSchemaData)
        // makefields(AchievementSchemaData, setLoading);
    };
    
    const addAndToast = async(e, type) => {
        await ToastPromise(addAchievementApiFunction(e, tempMap[achievement]))
            navigate(`/achievements/bookspublished`);
    }
    return (
        <div className="root bg-blue">
        <div className=" main-div  w-1/2 bg-light  md:w-1/2 ml-auto mr-auto mb-4 mt-3 border leading-6 px-2 py-2.5 rounded-2xl ">
            <form className="">
                <div className="" id="addAchievement ">
                    <div className="add-achievement w-full">
                        <label htmlFor="achievement" className="inline text-base mb-3 mt-4 py-4 font-semibold text-black leading-5 ">CHOOSE ACHIEVEMENT TYPE</label>
                            
                        <select id="achievement" className="bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2 mb-2 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 " onChange={changeOption}>
                            {!AchievementDropDown[prop] && <option>Choose Type Of Achievement</option>}
                            {
                                Object.keys(AchievementDropDown).map((item, index) => {
                                    if (item !== prop) {
                                        return <option value={AchievementDropDown[item]} key={index}>{item}</option>
                                    }
                                    else
                                        return <option selected value={AchievementDropDown[item]} key = {index}>{item}</option>
                                })
                            }
                        </select>
                    </div>
                    {Loading&&<Loader />}
                    <div id="fields" className="add-achievement mb-3 bg-lavender mt-5 p-5 border rounded-xl ml-auto mr-auto shadow-md shadow-gray">

                        <div id="sub-fields" className="achievement-field mb-3"></div>
                    </div>
                   
                </div>
                <div className="btn-div mt-0">
                <button type="submit" className="submit-btn text-white bg-blue hover:bg-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-md  mt-0 w-full sm:w-auto px-8 py-2.5 text-center dark:focus:ring-blue-800" value = {achievement} 
                onClick={(e)=>ToastPromise(addAchievementApiFunction(e, tempMap[achievement]))}>SUBMIT</button>
                </div>
            </form>
           
            <CustomToastContainer/>
        </div> </div>



    )
}
export default AddAchievement;
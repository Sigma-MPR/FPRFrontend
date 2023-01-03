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
        <div className="w-1/2 ml-auto mr-auto">
                <div className="grid gap-3 mb-3 md:grid-cols-1" id="addAchievement">
                    <div className="add-achievement">
                        <label htmlFor="achievement" className="inline mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 ">Choose Achievement Type</label>

                        <select id="achievement" className="bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 " onChange={changeOption}>
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
                </div>
                <form id="fields" className="add-achievement">
                    </form>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value = {achievement} 
                onClick={(e)=>addAndToast(e, tempMap[achievement])}>Submit</button>
            <CustomToastContainer/>
        </div>



    )
}
export default AddAchievement;
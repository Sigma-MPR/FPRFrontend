import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AddAchievement.css";
import { AchievementDropDown } from "../../constants";
import {makefields, addAchievementApiFunction, getFieldsByAPI} from './functions';
const tempMap = {
    "BP": "BooksPublished",
    "CP": "ConferenceProceedings",
}
const AddAchievement = () => {
    const location = useLocation();
    const prop = location.state.name;
    console.log(tempMap[AchievementDropDown[prop]]);
    const [achievement, setAchievement] = useState(AchievementDropDown[prop]);
    const [AchievementSchemaData, setAchievementSchemaData] = useState({});

    useEffect(() => {
        getFieldsByAPI(tempMap[AchievementDropDown[prop]], setAchievementSchemaData)
    },
    // eslint-disable-next-line
    []);
    useEffect(() => {
        document.querySelector("#fields").innerHTML = '';
        makefields(AchievementSchemaData);
    }, [AchievementSchemaData]);
    
    const changeOption = (e) => {
        setAchievement(e.target.value);
        console.log(e.target.value);
        getFieldsByAPI(tempMap[e.target.value], setAchievementSchemaData)
        document.querySelector("#fields").innerHTML = '';
        makefields(AchievementSchemaData);
    };
    
    return (
        <div className="w-1/2 ml-auto mr-auto">
            <form className="w-1/2">
                <div className="grid gap-3 mb-3 md:grid-cols-1" id="addAchievement">
                    <div className="add-achievement">
                        <label htmlFor="achievement" className="inline mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 ">Choose Achievement Type</label>
                        <select id="achievement" className="bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 " onChange={changeOption}>
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
                    <div id="fields" className="add-achievement"></div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value = {achievement} onClick={addAchievementApiFunction}>Submit</button>
            </form>
        </div>



    )
}
export default AddAchievement;
import React from "react";
import { useState, useEffect } from "react";
import "./AddAchievement.css";
import { useLocation } from "react-router-dom";
import { AchievementSchemaData } from "../../constants";
const textField = (fieldName) => {
    return (
        `<div>
                <label for=${fieldName} className="block mb-2 text-sm text-gray-900 dark:text-gray-300">${fieldName}</label>
                <input type="text" id=${fieldName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required="" />
        </div>`
    )
}
const numberField = (fieldName) => {
    return (
        `<div>
                <label for=${fieldName} className="block mb-2 text-sm text-gray-900 dark:text-gray-300">${fieldName}</label>
                <input type="number" id=${fieldName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
            </div>`
    )
}
const dateField = (fieldName) => {
    return (
        `<div>
                <label for=${fieldName} className="block mb-2 text-sm font-black text-gray-900 dark:text-gray-400">${fieldName}</label>
                <input type="date" id=${fieldName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
            </div>`
    )
}

const AchievementDropDown = {
    "Books Published": "BP",
    "Conference Proceedings": "CP"
};
const makefields = (v) => {
    Object.keys(v).forEach(function (key, index) {
        if (v[key] === "TEXT") {
            document.querySelector("#fields").innerHTML += textField(key);
        }
        else if (v[key] === "NUMBER") {
            document.querySelector("#fields").innerHTML += numberField(key);
        }
        else if (v[key] === "DATE") {
            document.querySelector("#fields").innerHTML += dateField(key)
        }
    })
}
const AddAchievement = () => {
    const location = useLocation();
    const prop = location.state.name;
    const [achievement, setAchievement] = useState(AchievementDropDown[prop]);
    useEffect(() => {
        if (achievement)
            makefields(AchievementSchemaData[AchievementDropDown[prop]]);
    },
        // eslint-disable-next-line
        []);
    const changeOption = (e) => {
        setAchievement(e.target.value);
        document.querySelector("#fields").innerHTML = '';
        makefields(AchievementSchemaData[e.target.value]);
    };

    return (
        <div class="w-1/2 ml-auto mr-auto">
            <form class="w-1/2">
                <div className="grid gap-3 mb-3 md:grid-cols-1" id="addAchievement">
                    <div className="add-achievement">
                        <label for="achievement" className="inline mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose Achievement Type</label>
                        <select id="achievement" className="bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={changeOption}>
                            {!AchievementDropDown[prop] && <option>Choose Type Of Achievement</option>}
                            {
                                Object.keys(AchievementDropDown).map((item) => {
                                    if (item !== prop) {
                                        return <option value={AchievementDropDown[item]}>{item}</option>
                                    }
                                    else
                                        return <option selected value={AchievementDropDown[item]}>{item}</option>
                                })

                            }
                        </select>
                    </div>
                    <div id="fields" className="add-achievement"></div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>



    )
}
export default AddAchievement;

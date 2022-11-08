import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./AddAchievement.css";
import { addAchievement } from "../../apis";
const BP = {
    "Title_Of_Book" : "TEXT",
    "Publishing_Year" : "NUMBER",
    "Publisher" : "TEXT",
    "ISBN" : "TEXT",
    "Authors" : "TEXT",
    "Co_Authors" : "TEXT",
    "Number_Of_Pages" : "NUMBER"
}
const CP = {
    "Title Of Paper" : "TEXT",
    "Conference Name" : "TEXT",
    "Conference Date" : "DATE",
    "Conference Location" : "TEXT",
    "Authors" : "TEXT",
    "Co-Authors" : "TEXT",
    "Attendees" : "NUMBER"
}
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
const AddAchievement = () => {
    const [achievement, setAchievement] = useState("BP");
    let v = BP;
    let str = '';
    const changeOption = (e) => {
            setAchievement(achievement==='BP'?'CP':'BP');
            alert(achievement);
            v = eval(achievement);
            document.querySelector("#fields").innerHTML = '';
            Object.keys(v).forEach(function(key, index) {
                if(v[key] === "TEXT") {
                    document.querySelector("#fields").innerHTML += textField(key);
                }
                else if(v[key] === "NUMBER") {
                    document.querySelector("#fields").innerHTML += numberField(key);
                }
                else if(v[key] === "DATE") {
                    document.querySelector("#fields").innerHTML += dateField(key)
                }
              })
    };

    return (
    <div class = "w-1/2 ml-auto mr-auto">
    <form class = "w-1/2">
        <div className="grid gap-3 mb-3 md:grid-cols-1" id="addAchievement">
            <div className="add-achievement">            
                <label for="achievement" className="inline mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Choose Achievement Type</label>
                <select id="achievement" className="bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange = {changeOption}>
                <option selected value="BP">Choose an Achievement</option>
                <option value="BP">Books Published</option>
                <option value="CP">Conference Proceeding</option>
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

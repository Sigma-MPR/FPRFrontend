// import { EndpointList } from "../../constants";
import {EditProfile } from "../../constants";
import "../EditProfile.css";
//add editprofile api for fieldname mapping

import { CustomToastContainer, ToastError, ToastSuccess } from "../../components/Toast/Toast";
import { useLocation } from "react-router";

const textField = (fieldName, required) => {
     return (
         `<div className="Achievementform">
 
         <div class="md:flex md:items-left mb-6">
         <div class="md:w-1/3">
           <label class="block font-medium text-gray-900 dark:text-gray-400 md:text-left mb-1 md:mb-0 pt-2 pr-4" for=${fieldsMapping[fieldName]} >
           ${fieldsMapping[fieldName]}
           </label>
         </div>
         <div class="md:w-2/3">
           <input id=${fieldsMapping[fieldName]} class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" value="" placeholder='Enter ${fieldsMapping[fieldName]}' ${required && 'required'} />
         </div>
       </div>
 
         </div>`
     )
 }
 const numberField = (fieldName, required) => {
     return (
         `<div>
         <div class="md:flex md:items-left mb-6">
         <div class="md:w-1/3">
           <label class="block font-medium text-gray-900 dark:text-gray-400 md:text-left mb-1 md:mb-0 pt-2  pr-4" for=${fieldsMapping[fieldName]} >
           ${fieldsMapping[fieldName]}
           </label>
         </div>
         <div class="md:w-2/3">
           <input type="number" id=${fieldsMapping[fieldName]} class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name"  value="" placeholder='Enter ${fieldsMapping[fieldName]}' ${required && 'required'} />
         </div>
       </div>
 
             </div>`
     )
 }
 
 const makefields = (fields, setLoading) => {
     if (fields.length > 0) {
         // eslint-disable-next-line
         fields.map((field) => {
             if (field.type === "String") { 
                 document.querySelector("#fields").innerHTML += textField(field.name, field.required);
             }
             else if (field.type === "Number") {
                 document.querySelector("#fields").innerHTML += numberField(field.name);
             }
             else if (field.type === "Date") {
                 document.querySelector("#fields").innerHTML += dateField(field.name)
             }
         })
         setLoading(false);
     }
     else {
         document.querySelector("#fields").innerHTML = `<h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">No Fields Found</h1>`
         setLoading(true);
         // ToastError("No Fields Found");
     }
 
 }

/*const getFieldsByAPI = async (achievement, setAchievementSchemaData) => {
    const endpoint = ACHIEVEMENT_API;
    try {  
        const apiAchievement = achievement.split(" ").join("");
        // apiAchievement =  apiAchievement == "Conference Proceeding"? "ConferenceProceedings" : apiAchievement;
        const resp = await fetch(`${endpoint}/achievements/fields?model=${apiAchievement}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await resp.json();
        setAchievementSchemaData(data.modelFields);
    }
    catch (err) {
        // console.log("Error Occured");
        ToastError("Error Occured Getting Fields");
        console.log(err);
        return;
    }
}

const addAchievementApiFunction = async(e, ach) => {
    // alert(ach);
    const str = ach.split(" ").join("").toLowerCase();
    e.preventDefault();
    var ele = document.getElementsByTagName("form")[0];
    ele.checkValidity();
    ele.reportValidity();
    const achievement = e.target.value;
    const data = {};
    const fields = document.querySelectorAll("#fields input");
    fields.forEach((item) => {
        data[item.id] = item.value;
    })
    console.log(data);
    // data["cid"] = "507f1f77bcf86cd799439011";
    // data["uid"] = "";
    const endpoint = EndpointList[achievement];
    // console.log("Endpoint: " + endpoint);
    // bring the logic of the acheivement in here
    const apiToCall = `${ACHIEVEMENT_API}/achievements/${str}`;
    // console.log(apiToCall);
    if (!endpoint) return alert("Please Select Achievement Type");
    try {
        const resp = await fetch(`${apiToCall}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        await resp.json();
        
          //   go to achievements/str
          //   problem:
          //       unable to maintaint he state of the achievements
          //       so the achievements are not getting updated
       
        window.location.href = `/achievements/${str}`;
        

        
    }
    catch (err) {
        console.log(err);
        // alert("Error Occured");
        ToastError("Error Occured");
    }
};*/

export { textField, numberField, getFieldsByAPI };
//change fields






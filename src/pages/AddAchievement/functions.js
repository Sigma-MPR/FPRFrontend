import { EndpointList } from "../../constants";
import { ACHIEVEMENT_API, fieldsMapping } from "../../constants";
// toast
import { CustomToastContainer, ToastError, ToastSuccess } from "../../components/Toast/Toast";
import { useLocation } from "react-router";
const textField = (fieldName, required) => {
    return (
        `<div>
                <label for=${fieldsMapping[fieldName]} className="block mb-2 text-sm text-gray-900 dark:text-gray-400 ">${fieldsMapping[fieldName]}</label>
                <input type="text" id=${fieldsMapping[fieldName]} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md" placeholder='Enter ${fieldsMapping[fieldName]}' ${required && 'required'} />
        </div>`
    )
}
const numberField = (fieldName, required) => {
    return (
        `<div>
                <label for=${fieldsMapping[fieldName]} className="block mb-2 text-sm text-gray-900 dark:text-gray-400">${fieldsMapping[fieldName]}</label>
                <input type="number" id=${fieldsMapping[fieldName]} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md" placeholder='Enter ${fieldsMapping[fieldName]}' required  />
            </div>`
    )
}
const dateField = (fieldName, required) => {
    return (
        `<div>
                <label for=${fieldsMapping[fieldName]} className="block mb-2 text-sm font-black text-gray-900 dark:text-gray-400 ">${fieldsMapping[fieldName]}</label>
                <input type="date" id=${fieldsMapping[fieldName]} className="bg-gray-50 border border-gray-450 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md"  ${required && 'required'} />
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

const getFieldsByAPI = async (achievement, setAchievementSchemaData) => {
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
        /* 
            go to achievements/str
            problem:
                unable to maintaint he state of the achievements
                so the achievements are not getting updated
        */
        window.location.href = `/achievements/${str}`;
        

        
    }
    catch (err) {
        console.log(err);
        // alert("Error Occured");
        ToastError("Error Occured");
    }
};

export { textField, numberField, dateField, makefields, addAchievementApiFunction, getFieldsByAPI };
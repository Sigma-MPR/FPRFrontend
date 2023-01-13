import { EndpointList } from "../../constants";
import { ACHIEVEMENT_API, fieldsMapping } from "../../constants";
import './AddAchievement.css';
import { ToastError } from "../../components/Toast/Toast";
import { error } from "daisyui/src/colors";
const textField = (fieldName, required, value) => {
    return (
        `<div className="Achievementform">

        <div class="md:flex md:items-left mb-6">
        <div class="md:w-1/3">
          <label class="block font-medium  md:text-left mb-1 md:mb-0 pt-3 pr-4" for=${fieldsMapping[fieldName]} >
          ${fieldsMapping[fieldName]}
          </label>
        </div>
        <div class="md:w-2/3">
          <input id=${fieldName} class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" value='${value || ''}' placeholder='Enter ${fieldsMapping[fieldName]}' required =${required} />
        </div>
      </div>

        </div>`
    )
}
const numberField = (fieldName, required, value) => {
    return (
        `<div>
        <div class="md:flex md:items-left mb-6">
        <div class="md:w-1/3">
          <label class="block font-medium   md:text-left mb-1 md:mb-0 pt-3  pr-4" for=${fieldsMapping[fieldName]} >
          ${fieldsMapping[fieldName]}
          </label>
        </div>
        <div class="md:w-2/3">
          <input type="number" id=${fieldName} class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name"  value='${value || ''}' placeholder='Enter ${fieldsMapping[fieldName]}' required = ${required} />
        </div>
      </div>

            </div>`
    )
}

const dateField = (fieldName, required, value) => {
    return (
        `<div>
        <div class="md:flex md:items-left mb-6">
        <div class="md:w-1/3">
          <label class="block font-medium  md:text-left mb-1 md:mb-0 pt-3 pr-4" for=${fieldsMapping[fieldName]} >
          ${fieldsMapping[fieldName]}
          </label>
        </div>
        <div class="md:w-2/3">
          <input type="date" id=${fieldName} class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name"  value = '${value ? new Date(value).toISOString().split("T")[0] : ''}' placeholder='Enter ${fieldsMapping[fieldName]}' required = ${required} />
        </div>
      </div>
            </div>`
    )
}
const boolFields = (fieldsName, required, value) => {
    return (
        `<div>
        <div class="md:flex md:items-left mb-6">
        <div class="md:w-1/3">
          <label class="block font-medium  md:text-left mb-1 md:mb-0 pt-3 pr-4" for=${fieldsMapping[fieldsName]} >
          ${fieldsMapping[fieldsName]}
          </label>
        </div>
        <div class="md:w-2/3 text-center">
        <label class="relative inline-flex items-center cursor-pointer">
        
          <input type="checkbox" ${value?"checked":''} class="sr-only peer"  id=${fieldsName}>
            <div class="w-11 h-6 bg-gray-200 peer-focus:ring-4 peer-focus:ring-blue-300 bg-blue dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-light"></div>
            <span id = ${fieldsName} class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 text-input">N/A   </span>
        </label>
        </div>
      </div>
            </div>`
    )
}

const makefields = (fields, setLoading, achievement) => {
    if (fields?.length > 0) {
        // eslint-disable-next-line
        fields.map((field) => {
            if (field.type === "String") {
                document.querySelector("#fields").innerHTML += textField(field.name, field.required, achievement ? achievement[field.name] : null);
            }
            else if (field.type === "Number") {
                document.querySelector("#fields").innerHTML += numberField(field.name, field.required, achievement ? achievement[field.name] : null);
            }
            else if (field.type === "Date") {
                document.querySelector("#fields").innerHTML += dateField(field.name, field.required, achievement ? achievement[field.name] : null)
            }
            else if (field.type === "Boolean") {
                document.querySelector("#fields").innerHTML += boolFields(field.name, field.required, achievement ? achievement[field.name] : null)
            }
        })
        setLoading(false);
    }
    else {
        document.querySelector("#fields").innerHTML = `<h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">No Fields Found</h1>`
        setLoading(true);
    }

}

const getFieldsByAPI = async (achievement, setAchievementSchemaData) => {
    const endpoint = ACHIEVEMENT_API;
    try {
        let apiAchievement = achievement.split(" ").join("");
        apiAchievement = apiAchievement == "ConferenceProceeding" ? "ConferenceProceedings" : apiAchievement;
        console.log(apiAchievement);
        const resp = await fetch(`${endpoint}/achievement/fields?model=${apiAchievement}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            }
        })
        const data = await resp.json();
        setAchievementSchemaData(data.modelFields);
    }
    catch (err) {
        ToastError("Error Occured Getting Fields");
        return;
    }
}

const addAchievementApiFunction = async (e, ach) => {
    const str = ach.split(" ").join("").toLowerCase();
    e.preventDefault();
    var ele = document.getElementsByTagName("form")[0];
    ele.checkValidity();
    if (!ele.reportValidity()) {
        return new error()
    }
    const achievement = e.target.value;
    const data = {};
    const fields = document.querySelectorAll("#fields input");
    fields.forEach((item) => {
        if(item.type == "checkbox"){
            data[item.id] = item.checked;
        }
        else
            data[item.id] = item.value;
    })

    console.log(data);
    data["uid"] = localStorage.getItem("userId");
    data["cid"] = localStorage.getItem("collegeId");
    const endpoint = EndpointList[achievement];
    const apiToCall = `${ACHIEVEMENT_API}/${str}`;
    if (!endpoint) return alert("Please Select Achievement Type");
    try {
        const resp = await fetch(`${apiToCall}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(data)
        })
        await resp.json();
        return true
    }
    catch (err) {
        console.log(err);
        ToastError("Error Occured");
    }
};

const updateAchievementApiFunction = async (e, ach, Achid) => {

    const str = ach.split(" ").join("").toLowerCase();
    e.preventDefault();
    var ele = document.getElementsByTagName("form")[0];
    ele.checkValidity();

    if (!ele.reportValidity()) {
        return new error()
    }
    console.log(Achid);
    const data = {};
    const fields = document.querySelectorAll("#fields input");
    fields.forEach((item) => {
        data[item.id] = item.value;
    })
    data['id'] = Achid;
    data["uid"] = localStorage.getItem("userId");
    data["cid"] = localStorage.getItem("collegeId");
    const apiToCall = `${ACHIEVEMENT_API}/${str}`;
    try {
        const resp = await fetch(`${apiToCall}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(data)
        })
        await resp.json();
        return true
    
    }
    catch (err) {
        ToastError("Error Occured Updating");
    }
};
export { textField, numberField, dateField, makefields, addAchievementApiFunction, getFieldsByAPI, updateAchievementApiFunction };
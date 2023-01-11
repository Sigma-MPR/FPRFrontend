import { EndpointList, USER_API } from "../../constants";
import { USER_API , EditProfile } from "../../constants";
import './Register.css';
import { ToastError } from "../../components/Toast/Toast";
import { error } from "daisyui/src/colors";
const textField = (fieldName, required, value) => {
    return (
        `<div className="Achievementform">

        <div class="md:flex md:items-left mb-6">
        <div class="md:w-1/3">
          <label class="block font-medium  md:text-left mb-1 md:mb-0 pt-3 pr-4" for=${EditProfile[fieldName]} >
          ${EditProfile[fieldName]}
          </label>
        </div>
        <div class="md:w-2/3">
          <input id=${fieldName} class="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text" value='${value||''}' placeholder='Enter ${EditProfile[fieldName]}' required =${required} />
        </div>
      </div>

        </div>`
    )
}


const makefields = (fields, setLoading, achievement) => {
    if (fields?.length > 0) {
        // eslint-disable-next-line
        fields.map((field) => {
             (field.type === "String") {
                document.querySelector("#fields").innerHTML += textField(field.name, field.required, achievement ? achievement[field.name] : null);
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
    const endpoint = USER_API;
    try {
        let apiAchievement = achievement.split(" ").join("");
        apiAchievement =  apiAchievement == "ConferenceProceeding"? "ConferenceProceedings" : apiAchievement;
        console.log(apiAchievement);
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
        // //console.log("Error Occured");
        ToastError("Error Occured Getting Fields");
        //console.log(err);
        return;
    }
}

const addUserdataApiFunction = async (e, ach) => {
    const str = ach.split(" ").join("").toLowerCase();
    e.preventDefault();
    var ele = document.getElementsByTagName("form")[0];
    ele.checkValidity();
    if(!ele.reportValidity())
    {
        // ToastError("Please Fill All Required Fields");
        return new error()
    }
    const achievement = e.target.value;
    const data = {};
    const fields = document.querySelectorAll("#fields input");
    fields.forEach((item) => {
        data[item.id] = item.value;
    })
    // console.log(data);
    //console.log(data);
    // data["cid"] = "507f1f77bcf86cd799439011";
    data["uid"] = localStorage.getItem("userId");
    // data["uid"] = "";
    const endpoint = EndpointList[achievement];
    // //console.log("Endpoint: " + endpoint);
    // bring the logic of the acheivement in here
    const apiToCall = `${USER_API}/achievements/${str}`;
    // //console.log(apiToCall);
    // if (!endpoint) return alert("Please Select Achievement Type");
    // try {
    //     const resp = await fetch(`${apiToCall}`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "authorization": localStorage.getItem("token")
    //         },
    //         body: JSON.stringify(data)
    //     })
    //     await resp.json();
    //     return true
        /* 
            go to achievements/str
            problem:
                unable to maintaint he state of the achievements
                so the achievements are not getting updated
        */
        // window.location.href = `/achievements/${str}`;
        // navigate(`/achievements/${str}`);
        // eslint-disable-next-line
        // const location = useLocation();
        // //console.log(location);


    // }
    // catch (err) {
    //     //console.log(err);
    //     // alert("Error Occured");
    //     ToastError("Error Occured");
    // }
};

const updateUserdataApiFunction = async (e, ach, Achid) => {

    const str = ach.split(" ").join("").toLowerCase();
    e.preventDefault();
    var ele = document.getElementsByTagName("form")[0];
    ele.checkValidity();
    
    if(!ele.reportValidity()){
        return new error()
    }
    // const achievement = e.target.value;
    console.log(Achid);
    const data = {};
    const fields = document.querySelectorAll("#fields input");
    fields.forEach((item) => {
        data[item.id] = item.value;
    })
    data['id'] = Achid;
    // data["cid"] = "507f1f77bcf86cd799439011";
    data["uid"] = localStorage.getItem("userId");
    const apiToCall = `${USER_API``}/achievements/${str}`;
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
        //console.log(err);
        // alert("Error Occured");
        ToastError("Error Occured Updating");
    }
};
export { textField, makefields, addUserdataApiFunction , getFieldsByAPI, updateUserdataApiFunction };
// EditProfile
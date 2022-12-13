import { EndpointList } from "../../constants";

const textField = (fieldName, required) => {
    return (
        `<div>
                <label for=${fieldName} className="block mb-2 text-sm text-gray-900 dark:text-gray-400 ">${fieldName}</label>
                <input type="text" id=${fieldName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md" placeholder="John" ${required&&'required'} />
        </div>`
    )
}
const numberField = (fieldName, required) => {
    return (
        `<div>
                <label for=${fieldName} className="block mb-2 text-sm text-gray-900 dark:text-gray-400">${fieldName}</label>
                <input type="number" id=${fieldName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md" placeholder="" required  />
            </div>`
    )
}
const dateField = (fieldName, required) => {
    return (
        `<div>
                <label for=${fieldName} className="block mb-2 text-sm font-black text-gray-900 dark:text-gray-400 ">${fieldName}</label>
                <input type="date" id=${fieldName} className="bg-gray-50 border border-gray-450 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-md"  ${required&&'required'} />
            </div>`
    )
}
const makefields = (fields) => {
    if(fields.length>0)
    // eslint-disable-next-line
        fields.map((field)=>{
            if (field.type === "String"){
                document.querySelector("#fields").innerHTML += textField(field.name, field.required);
            }
            else if (field.type === "Number"){
                document.querySelector("#fields").innerHTML += numberField(field.name);
            }
            else if (field.type === "Date"){
                document.querySelector("#fields").innerHTML += dateField(field.name)
            }
        })
}

const getFieldsByAPI = async(achievement, setAchievementSchemaData) => {
    try{
        const apiAchievement = achievement.split(" ").join("");
        fetch(`${endpoint}/achievements/fields?model=${apiAchievement}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            setAchievementSchemaData(data.modelFields);
            // return data.allFields;
        })
    }
    catch(err){
        console.log("Error Occured");
        console.log(err);
        return;
    }

    
}

const addAchievementApiFunction = (e) => {
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
    data["cid"] = "507f1f77bcf86cd799439011";
    data["uid"] = "";
    const endpoint = EndpointList[achievement];
    console.log(data);
    if(!endpoint) return alert("Please Select Achievement Type");
try{
    fetch(`${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert("Achievement Added");
        })
    }
    catch(err){
        console.log(err);
        alert("Error Occured");
    }
};

export {textField, numberField, dateField, makefields, addAchievementApiFunction, getFieldsByAPI};
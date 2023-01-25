import fieldsMapping from "./fieldMapping"
const months = ["Janurary", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const handleBoolean = (element, key, data) => {
    if (typeof element[key] === "boolean")
        data[fieldsMapping[key]] = element[key] ? "Yes" : "No"
}
const handleDates = (element, key, data, name) => {
    const fields = [];
    if(name == "Books Published" || name == "Journals")
        fields.push("Publication Month", "Publication Year");
    else if(name == "Conference Proceedings" && fieldsMapping[key] == "Start Date")
        fields.push("Start Date", "Start Month", "Start Year");
    else if(name == "Conference Proceedings" && fieldsMapping[key] == "End Date")
        fields.push("End Date", "End Month", "End Year");
    else if(name == "Conference Proceedings" && fieldsMapping[key] == "Publishing Date")
        fields.push("Publishing Date", "Publishing Month", "Publishing Year");

        if (fieldsMapping[key].endsWith("Date")) {
        const month = months[new Date(element[key]).getMonth()];
        const year = new Date(element[key]).getFullYear();
        const date = new Date(element[key]).getDate();
        delete data[fieldsMapping[key]];
        fields.map(field => {
            if (field.includes("Month")) {
                data[field] = month;
            } else if (field.includes("Year")) {
                data[field] = year;
            } else if (field.includes("Date")) {
                data[field] = date;
            }
        })
        return true;
    }
    return false
}
const mouldData = (achievement, name) => {
    const resp = [];
    achievement&&achievement.forEach(element => {
        const data = {};
        for (let key in element) {
            if (fieldsMapping[key]) {
                data[fieldsMapping[key]] = element[key]
                handleBoolean(element, key, data);
                handleDates(element, key, data, name);
            }
            data["Faculty Name"] = element.uid.name
        }
        // console.log(data)
        resp.push(data)
    });
    return resp;
}

export default mouldData;
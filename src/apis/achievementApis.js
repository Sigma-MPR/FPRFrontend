import axios from 'axios';
const addAchievement = async() => {
    // console.log(data);
    // const loginAPI = "http://localhost:3000/login";
    try{
        // const resp = await axios.post(loginAPI, data);
        // return resp;
        alert("Achievement Added");
    }
    catch(err){
        console.log(err);
        alert("Achievement Not Added");
    }

}
export default addAchievement
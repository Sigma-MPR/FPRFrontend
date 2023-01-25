import axios from 'axios';
const addAchievement = async() => {
    try{
        alert("Achievement Added");
    }
    catch(err){
        console.log(err);
        alert("Achievement Not Added");
    }

}
export default addAchievement
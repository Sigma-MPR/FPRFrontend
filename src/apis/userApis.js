import axios from 'axios';
const Login = async(data) => {
    console.log(data);
    const loginAPI = "http://localhost:3000/login";
    try{
        const resp = await axios.post(loginAPI, data);
        return resp;
    }
    catch(err){
        console.log(err);
    }

}
export default Login
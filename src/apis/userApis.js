import axios from 'axios';
const Login = async(data) => {
    console.log(data);
    // to be taken from secret source
    const loginAPI = "http://localhost:3000/login";
    try{
        const resp = await axios.post(loginAPI, data);
        return resp.data;
    }
    catch(err){
        console.log(err);
    }

}
export default Login
import axios from 'axios';
import { USER_API } from '../constants';
const Login = async(data) => {
    const loginAPI = `${USER_API}/user/login`;
    //console.log(loginAPI);
    try{
        const resp = await axios.post(loginAPI, data);
        return resp;
    }
    catch(err){
        //console.log(err);
    }

}
const ForgotPassword = async(data) => {
    const forgotPasswordAPI = `${USER_API}/user/forgotpassword`;
    //console.log
    try{
        const resp = await axios.post(forgotPasswordAPI, data);
        return resp;
    }
    catch(err){
        console.log(err);
    }

}
export {Login, ForgotPassword};
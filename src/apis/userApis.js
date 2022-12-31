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
const ChangePassword = async(data) => {
    const changePasswordAPI = `${USER_API}/user/changepassword`;
    //console.log
    try{
        const resp = await axios.post(changePasswordAPI, data);
        return resp;
    }
    catch(err){
        console.log(err);
    }
}

const GetContext = async() => {
    const getContextAPI = `${USER_API}/user/getcontext`;
    //console.log
    try{
        const resp = await axios.get(getContextAPI);
        if(resp.status === 200)
            return true;
        else
            return false;
    }
    catch(err){
        console.log(err);
        return false;
    }
}
export {Login, ForgotPassword, ChangePassword, GetContext};
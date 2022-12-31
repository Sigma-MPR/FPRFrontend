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
export default Login
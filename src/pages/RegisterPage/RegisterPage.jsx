import jwt_decode from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
// import { GoogleOAuthProvider } from '@react-oauth/google';
import {signInWithGoogle} from '../../firebase';
import "./RegisterPage.css";
const RegisterPage = () => {
    const navigate = useNavigate();
    const apiToCall = "http://localhost:5000/user/login";
    const signupHandle = async () => {
        var a = localStorage.getItem('User') || "[]";
        const u = JSON.parse(a);
        console.log(u);
        // navigate('/dashboard');
        const data = {
            "email": u.email,

        };
        console.log("login ",data);
        const resp = await fetch(`${apiToCall}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const res = await resp.json();
        console.log("res ",res);
        if (res.message === 'User does not exist') {
            navigate('/complete-your-profile');
        }
        else {
            navigate('/Landing-page');
        }
    }

    return (
            <center>
        <div class="loginCard">
            <div class="logincard-content">
                <h2>Welcome to the community!</h2>
                <p>Threre is only one way to register that is with google</p>
                <div class="logincard-action">
                {
                        
                    }
                    {/* <button onClick={signInWithGoogle}>Sign in</button> */}
                </div>
            </div>
        </div> 
        </center>
    )
}

export default RegisterPage;
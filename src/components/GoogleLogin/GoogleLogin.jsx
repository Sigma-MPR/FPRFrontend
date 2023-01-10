import jwt_decode from "jwt-decode";
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

// const googleSuccessHandler = async (userObject) => {
//     alert("sup");
//     const email = userObject.email;
//     const exp = userObject.exp;
//     console.log(email);
//     console.log(new Date(exp));
// }
const GoogleLoginComponent = ({ onSuccess, onError, ...props }) => {
    const navigate = useNavigate();

    <GoogleLogin
    onSuccess={credentialResponse => {
        var userObject = jwt_decode(credentialResponse.credential);
        localStorage.removeItem('User');
        localStorage.setItem('User', JSON.stringify(userObject));
        // signupHandle();
        // googleSuccessHandler(userObject);
        // navigate('/dashboard');   //here we navigate to landing page if user name is found in db otherwise to complete-your-profile page
    }}
    onError={() => {
        console.log('Login Failed');
    }}
/>
}

export default GoogleLoginComponent;
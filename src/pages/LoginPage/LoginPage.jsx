import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { USER_API } from "../../constants";
import jwt_decode from "jwt-decode";
import './LoginPage.css';
import { Login } from '../../apis';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("Sign In with Google To Get Your Email");


    const login = async (e) => {
        e.preventDefault();
        const password = document.getElementById("password").value;
        let data = {
            email,
            password,
        }
        const loginResult = await Login(data);
        if (!loginResult) {
            alert("Invalid Credentials");
        }
        else {
            // setlocal storage
            console.log(loginResult);
            localStorage.setItem("token", loginResult.data.token);
            localStorage.setItem("userId", loginResult.data.userId);
            localStorage.setItem("collegeId", loginResult.data.cid);
            alert("Login Successful");
            // redirect to dashboard
            navigate("/dashboard");
        }
    }

    const googleSuccessHandler = async (userObject) => {
        console.log(userObject)
        const email = userObject.email;
        const resp = await fetch(`${USER_API}/all`, {
            method: "POST",
            body: JSON.stringify(
                {
                    "filter": {
                        "email": email
                    }
                }),
        })
        const res = await resp.json();
        if (res.data.length > 0) {
            setEmail(email);
        }
        else {
            navigate('/register', { state: { email: email, name: userObject.family_name } });
        }
        localStorage.removeItem('User');
        localStorage.setItem('User', JSON.stringify(userObject));
    }
    useEffect(() => {
        // scroll to bottom
        window.scrollTo(0, document.body.scrollHeight);
      
    }, [email])
    return (
        <main className='fixed w-full' style={{
            marginTop: "-5%",
            zIndex: "-1"
        }}>
        <div class="flex items-center justify-center min-h-screen bg-gray-100 CollegeBackground w-full">
            <div class="px-9 py-10 mt-4 text-left bg-white shadow-lg rounded-lg FadedWhiteBackground lg:w-4/12">
                <h3 class="text-2xl font-bold text-center">Faculty Login</h3>
                <form action="">
                    <div class="mt-4">
                        <div>
                            <input type="text" placeholder="Email"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 cursor-not-allowed" id='email' value={email} disabled={true} />
                        </div>
                        <div class="mt-4">
                            <input type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" id='password' />
                        </div>
                        <button class="px-10 py-2 my-3 mx-auto place-self-center text-white rounded-3xl hover:bg-blue-900 block LoginButton" onClick={login}>Login</button>
                        <div class="Line"></div>
                        <hr class="black" />
                        <a href="#" class="mx-auto flex items-center justify-center text-sm text-blue-600 hover:underline" onClick={(e) => {
                            e.preventDefault();
                            navigate("/forgotpassword")
                        }}>Forgot password?</a>
                    </div>
                </form>
                <a href="#" class="flex items-center justify-center mt-3 text-blue-600 hover:underline text-base mb-1" onClick={(e) => { e.preventDefault() }}>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            var userObject = jwt_decode(credentialResponse.credential);
                            googleSuccessHandler(userObject);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </a>
            </div>
            </div>
            </main>
    )
}
export default LoginPage;


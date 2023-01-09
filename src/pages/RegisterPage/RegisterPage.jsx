import React, { useState } from 'react';
// import { useEffect } from 'react';
// import use
import './RegisterPage.css';

import {Register}  from '../../apis';
const RegisterPage = () => {
    const [user, setUser] = useState("Admin");
    
    const changeUser = (e) => {
        e.preventDefault();
        setUser(user === "Faculty"?"Admin":"Faculty");
    }
    // set Useffect for user
    // useEffect(() => {
    // }, [user]);
    
    const register = async(e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        //console.log(email, password);
        let data = {
            email,
            password,
        }
        const registerResult = await Register(data);
        if(!registerResult){
            alert("Invalid Credentials");}
        else{
            // setlocal storage
            console.log(registerResult);
            localStorage.setItem("token",registerResult.data.token);
            alert("Register Successful");
            // window.location.href = "/dashboard";
        }
    }
    return (
        <div class="flex items-center justify-center min-h-screen bg-gray-100 CollegeBackground">
            <div class="px-9 py-10 mt-4 text-left bg-white shadow-lg rounded-lg FadedWhiteBackground">
                <h3 class=" text-2xl font-bold text-center" >{user==='Admin'?'Faculty':'Admin'} Register</h3>
                <form action="">
                    <div class="mt-4">
                        <div>
                            <input type="text" placeholder="Email"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" id='email'/>
                        </div>
                        <div class="mt-4">
                            <input type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" id='password'/>
                        </div>
                        <div class="mt-4">
                            <input type="password" placeholder="Confirm Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" id='confirmPassword'/>
                        </div>
                        <div class="mt-4">
                            <input type="text" placeholder="Name"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" id='name'/>
                        </div>

                            <button class="px-10 py-2 my-3 mx-auto place-self-center  rounded-3xl hover:bg-blue-900 block RegisterButton" id="Registerbtn" onClick={register}>Register</button>
                            <div class="Line"></div>
                            <hr class="black"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RegisterPage;


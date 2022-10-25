import React, { useState } from 'react';
import { useEffect } from 'react';
// import use
import './LoginPage.css';
const LoginPage = () => {
    const [user, setUser] = useState("Faculty");
    
    const changeUser = () => {
        setUser(user == "Faculty"?"Admin":"Faculty");
    }
    // set Useffect for user
    useEffect(() => {
    }, [user]);

    
    const login = () => {
        alert("Login as "+user);
    }
    return (
        <div class="flex items-center justify-center min-h-screen bg-gray-100 CollegeBackground">
            <div class="px-9 py-10 mt-4 text-left bg-white shadow-lg rounded-lg FadedWhiteBackground">
                <h3 class="text-2xl font-bold text-center">{user} Login</h3>
                <form action="">
                    <div class="mt-4">
                        <div>
                            <input type="text" placeholder="Email"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                        <div class="mt-4">
                            <input type="password" placeholder="Password"
                                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        </div>
                            <button class="px-10 py-2 my-3 mx-auto place-self-center text-white rounded-3xl hover:bg-blue-900 block LoginButton" onClick={login}>Login</button>
                            <div class="Line"></div>
                            <hr class="black"/>
                            <a href="#" class="mx-auto place-self-center text-sm text-blue-600 hover:underline block">Forgot password?</a>
                    </div>
                </form>
                <a href = "#" class="flex items-center justify-center mt-3 text-sm text-blue-600 hover:underline text-base mb-1" onClick={changeUser}>Login As {user}</a>
            </div>
        </div>
    )
}
export default LoginPage;


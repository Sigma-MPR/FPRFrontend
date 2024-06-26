import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { ChangePassword, GetContext } from '../../apis';
const ChangePasswordPage = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState('')
    useEffect(() => {
        // take last word from url
        const url = window.location.href;
        const urlArray = url.split('/');
        const lastWord = urlArray[urlArray.length - 1];
        if (lastWord != 'changepassword') {
            setToken(lastWord);
            // get context
            GetContext(lastWord).then((res) => {
                if (res.data === 'true' || res.data === true || res === true) {}
                else {
                    navigate('/login');
                }
            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            const token = localStorage.getItem('token');
            const id = localStorage.getItem('userId');
            if (!token || !id) {
                navigate('/login');
            }
        }
    },
        // eslint-disable-next-line
        [])
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const changePassword = async (e) => {
        e.preventDefault();
        if (newPassword === oldPassword) {
            alert('Old and New Passwords are same');
            return;
        }
        const res = await ChangePassword({
            email,
            oldPassword,
            newPassword,
            token
        });
        console.log(res);
        if (res) {
            alert('Password Changed Successfully');
            navigate('/login');
        }
        else {
            alert('Enter Valid Credentials');
        }
    }
    return (
        <main className='h-full'>
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div class="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                        <h2 class="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Change Password
                        </h2>
                        <form class="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your Email</label>
                                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="true" autoComplete="off" onChange={
                                    (e) => {
                                        setEmail(e.target.value);
                                    }
                                } />
                            </div>
                            <p className="text-sm text-red-600">You will recieve the new password on your email</p>
                            <div>
                                <label for="oldPassword" class="block mb-2 text-sm font-medium text-gray-900 ">Old Password</label>
                                <input type="password" name="oldPassword" id="oldPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" onChange={
                                    (e) => {
                                        setOldPassword(e.target.value);
                                    }
                                } />
                            </div>
                            <div>
                                <label for="newPassword" class="block mb-2 text-sm font-medium text-gray-900 ">New Password</label>
                                <input type="password" name="newPassword" id="newPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" onChange={(e) => {
                                    setNewPassword(e.target.value);
                                }} />
                            </div>
                            <div>
                                <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm password</label>
                                <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required="true" />
                            </div>
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="newsletter" aria-describedby="newsletter" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="newsletter" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="goolge.com">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={(e) => changePassword(e)}>Reset passwod</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ChangePasswordPage
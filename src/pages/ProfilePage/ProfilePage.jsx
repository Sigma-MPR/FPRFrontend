import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import { USER_API } from "../../constants";
import './ProfilePage.css';
const getUser = async (token, setUser, navigate) => {
    const response = await fetch(USER_API, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token
        }
    });
    const data = await response.json();
    if (data.error) {
        alert(data.error);
    }
    console.log(data);
    setUser(data);
}
const editUser = async (token, user, navigate, isDisabled, setUser) => {
    if (isDisabled) {
        return;
    }
    if (!user.password) {
        alert('Enter Password To Save Changes');
        toast.error('Enter Password To Save Changes', {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
        return;
    }
   
    console.log(user);
    const response = await fetch(USER_API, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `${token}`
        },
        body: JSON.stringify({ ...user })
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (data.error) {
        console.log(data.error);
    }
    alert(data.message);
}
const ProfilePage = () => {
    const token = localStorage.getItem('token');
    const [user, setUser] = useState({});
    const [isDisabled, setisdisabled] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        // scroll to bottom
        window.scrollTo(0, document.body.scrollHeight);
        getUser(token, setUser, navigate);
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , []);
    useEffect(() => {
    }, [user, isDisabled]);
    if (!token) {
        toast.error('No Session Found', {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
        navigate('/login');
    }

    return (
        <main>
            <div className="main-profile">
                <div className="profile-container">
                    <h1 className="text-5xl font-bold text-black mb-3" id="h1"> Profile </h1>
                    <div id="profile-container">
                        <form class="">
                            <div class="">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" for="name">
                                    Name
                                </label>
                                <input class="userInput appearance-none block bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" value={user.name} disabled={isDisabled} onChange={
                                    (e) => {
                                        setUser({ ...user, name: e.target.value });
                                    }
                                } />
                            </div>
                            <div class="">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-4" for="email">
                                    Email
                                </label>
                                <input class="userInput appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-3" id="email" type="email" disabled={isDisabled} value={user.email} onChange={(e) => {
                                    setUser({ ...user, email: e.target.value });
                                }} />
                            </div>
                            {/* flex div */}
                            <div className="flex w-3/4 justify-around">
                                <div>
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-4" for="isactive">Active</label>
                                    {
                                        user.isActive ?
                                            <input type="checkbox" className="toggle toggle-success disabled:bg-success" id="isActive" checked onChange={
                                                (e) => {
                                                    setUser({ ...user, isActive: e.target.checked });
                                                }
                                            }
                                            disabled={isDisabled}
                                            />
                                            :
                                            <input type="checkbox" className="toggle toggle-success disabled:bg-error" id="isActive" onChange={
                                                (e) => {
                                                    setUser({ ...user, isActive: e.target.checked });
                                                }
                                            } 
                                            disabled={isDisabled}
                                            />
                                    }
                                </div>
                                <div>
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-4" for="isHOD">HOD</label>
                                    {
                                        user.isHod ?
                                            <input type="checkbox" className="toggle toggle-success disabled:bg-success" id="isHOD" checked onChange={
                                                (e) => {
                                                    setUser({ ...user, isHod: e.target.checked });
                                                }
                                            }
                                            disabled={isDisabled}
                                            />
                                            :
                                            <input type="checkbox" className="toggle toggle-success disabled:bg-error" id="isHOD" onChange={
                                                (e) => {
                                                    setUser({ ...user, isHod: e.target.checked });
                                                }
                                            }
                                            disabled={isDisabled}
                                            />
                                    }
                                </div>
                                <div>
                                    <lable class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-4" for="isAdmin">Admin</lable>
                                    {
                                        user.isAdmin ?
                                            <input type="checkbox" className="toggle toggle-success disabled:bg-success" id="isAdmin" checked onChange={
                                                (e) => {
                                                    setUser({ ...user, isAdmin: e.target.checked });
                                                }
                                            }
                                            disabled={isDisabled}
                                            />
                                            :
                                            <input type="checkbox" className="toggle toggle-success disabled:bg-error" id="isAdmin" onChange={
                                                (e) => {
                                                    setUser({ ...user, isAdmin: e.target.checked });
                                                }
                                            }
                                            disabled={isDisabled}
                                            />
                                    }
                                </div>
                            </div>
                            <div class="">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-4" for="grid-password">
                                    Password
                                </label>
                                <input class="userInput appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" required={true} disabled={isDisabled} onChange={
                                    (e) => {
                                        setUser({ ...user, password: e.target.value });
                                    }
                                } />
                                <p className="text-xs text-white -mt-3 mb-3" >!Enter Password To Make Changes in the profile sections</p>
                                <p className="text-xs text-primary-400 -mt-3 mb-3" >!Password can only be changed using forgot password link in login section</p>
                            </div>

                            {/* <div class="">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-4" for="grid-state">
                            Role
                        </label>
                        <div class="relative">
                            <select class=" userInput block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" disabled={isDisabled}>
                                {
                                    user.role === 'TEACHER' ?
                                        <option value={'TEACHER'} selected>Teacher</option> : <option value={'STUDENT'} selected>Student</option>
                                }
                                {
                                    user.role === 'TEACHER' ? <option value={'STUDENT'}>Student</option> : <option value={'TEACHER'}>Teacher</option>
                                }
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div> */}
                            <button className="hover:bg-blue-700 font-bold py-3 px-6 rounded mt-5"
                                onClick={
                                    async (e) => {
                                        e.preventDefault();
                                        await editUser(token, user, navigate, isDisabled, setUser);
                                        document.querySelector('#grid-password').value = '';
                                        setisdisabled(!isDisabled)
                                    }
                                }
                                style={{ backgroundColor: '#D9F9FF' }}
                            >{isDisabled ? 'Edit Profile' : 'Save Changes'}</button>
                        </form>

                    </div>
                </div>
            </div>
        </main>
    )
}
export default ProfilePage;
import React from "react";
import ProfilePhoto from "../Images/ProfilePhoto.png"

// "/profile"
export default function UserProfile() {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 py-16 m-5 rounded-2xl shadow-xl bg-slate-100">
            <div className="py-5">
                <div className=" flex justify-center">
                    <img src={ProfilePhoto} className="rounded-full w-48" />
                </div>
                <div className=" flex justify-center">
                    <h1><b>Test</b></h1>
                </div>
                <div className=" flex justify-center">
                    <h1>Tester</h1>
                </div>
            </div>
            <div className="w-5/6 py-10 items-center">
                <div className="">
                    <div className="grid grid-cols-2">
                        <p>Email:</p>
                        <p>abc@gmail.com</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Department:</p>
                        <p>xyz</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Shift:</p>
                        <p>M</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Qualification:</p>
                        <p>PhD</p>
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1 my-5">
                    <button class="btn btn-outline btn-sm m-2 rounded-full">Analytics</button>
                    <button class="btn btn-outline btn-sm m-2 rounded-full">Edit Profile</button>
                    <button class="btn btn-outline btn-sm m-2 rounded-full">Change Password</button>
                </div>


            </div>
        </div>



    )
}
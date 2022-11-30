import React from "react";
import ProfilePhoto from "../Images/ProfilePhoto.png"

// "/profile"
export default function UserProfile() {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 sm:py-20 md:py-28 bg-slate-400">
            <div>
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
            <div className="">
                <div>
                    <p>Email:</p>
                </div>

                <div>
                    <p>Department:</p>
                </div>

                <div>
                    <p>Shift:</p>
                </div>

                <div>
                    <p>Qualification:</p>
                </div>

            </div>
        </div>



    )
}
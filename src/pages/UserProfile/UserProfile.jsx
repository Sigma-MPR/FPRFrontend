import React from "react";
import ProfilePhoto from "../Images/ProfilePhoto.png"

/**
 * @param {{title:String,description:String}} props 
 * @returns {JSX.Element}
 */
function DetailBox(props) {
    return (
        <div className="grid grid-cols-2">
            <h2>{props.title} :</h2>
            <p>{props.description}</p>
        </div>
    )
}

/**
 * @param {{text:String}} props 
 * @returns 
 */
function Btn(props){
    return (
        <button className="btn btn-outline btn-sm m-2 rounded-full">{props.text}</button>
    )
}

// "/profile"
export default function UserProfile() {
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 py-16 m-5 rounded-2xl shadow-xl bg-slate-100">
            <div className="py-5">
                <div className=" flex justify-center">
                    <img src={ProfilePhoto} className="rounded-full w-48" alt="Profile Pic"/>
                </div>
                <div className=" flex justify-center">
                    <h1><b>Test</b></h1>
                </div>
                <div className=" flex justify-center">
                    <h1>Tester</h1>
                </div>
            </div>
            <div className="md:w-5/6 py-10 ">
                <div className="flex flex-col max-[640px]:items-center">
                    <div className="w-fit">
                    <DetailBox title="Email" description="abc@gmail.com"/>
                    <DetailBox title="Department" description="xyz"/>
                    <DetailBox title="Shift" description="M"/>
                    <DetailBox title="Qualification" description="PhD"/>
                    </div>
                </div>
                <div className="grid sm:grid-cols-3 grid-cols-1 my-5">
                    <Btn text="Analytics"/>
                    <Btn text="Edit Profile"/>
                    <Btn text="Change Password"/>
                </div>


            </div>
        </div>



    )
}
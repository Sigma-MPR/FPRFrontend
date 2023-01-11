import React from "react";
import SurajmalLogo from '../Images/SurajmalLogo.jpg'
import {AiFillHome} from 'react-icons/ai'
import {MdAccountCircle} from 'react-icons/md'
import {IoIosLogOut} from 'react-icons/io'
export default function Navbar(){
    if( document.location.href.split("/")[document.location.href.split("/").length-1]!=='login')
        return(
            <div className="h-auto flex justify-between p-3">
                <img src={SurajmalLogo} className="w-12" alt="SurajmalLogo"/>
                
                <div className="py-4 flex">
                <AiFillHome/> 
                <MdAccountCircle/>
                <IoIosLogOut/>
                </div>
            </div>
        )
    }
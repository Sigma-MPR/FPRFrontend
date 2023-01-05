import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./EditProfile.css";


import Loader from "../../components/Loader/Loader";
import {CustomToastContainer, ToastError, ToastSuccess, ToastPromise} from "../../components/Toast/Toast";



/*basic layout
    navbar fetch
    main div
        div 1 image name
        div 2 deatils to edit
            form + btn
            textfields
            dropdown menu
            
*/



const EditProfile = () => {
    const location = useLocation();
    const prop = location.state.name;
    // alert(prop);
    const [achievement, setAchievement] = useState(AchievementDropDown[prop]);
    const [AchievementSchemaData, setAchievementSchemaData] = useState({});
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getFieldsByAPI(tempMap[AchievementDropDown[prop]], setAchievementSchemaData)
    },
    // eslint-disable-next-line
    []);

    useEffect(() => {
        document.querySelector("#fields").innerHTML = '';
        setLoading(true); 
        makefields(AchievementSchemaData, setLoading)
        // ToastSuccess("Input Modal Made");
    }, [AchievementSchemaData]);
    
    const changeOption = (e) => {
        document.querySelector("#fields").innerHTML = '';
        setLoading(true);
        ToastSuccess("Model Changed");
        setAchievement(e.target.value);
        // console.log(e.target.value);
        // alert(tempMap[e.target.value]);
        getFieldsByAPI(tempMap[e.target.value], setAchievementSchemaData)
        // makefields(AchievementSchemaData, setLoading);
    };
    
    return (
        <div className=" main-div  w-1/2  md:w-1/2 ml-auto mr-auto mb-4 border border-white rounded-2xl "> 
            <form className="">
                <div className="" id="edituser-details ">
                    <div className="userdetail-head p-4">
                        <div><img className=" border-gray-100 rounded-xl" src="" alt="" /> </div>
                    </div>
                    {Loading&&<Loader />}
                    <div id="fields" className="edit-profile mb-3">
                        <div id="sub-fields" className="edit-field mb-3"></div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="btn-div mt-0">
                <button type="submit" className="submit-btn text-white bg-blue-700 hover:bg-800 focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-md  mt-0 w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value = {achievement} 
                onClick={(e)=>ToastPromise(addAchievementApiFunction(e, tempMap[achievement]))}>SUBMIT</button>
                </div>
            </form>
           
            <CustomToastContainer/>
        </div>



    )
}
export default EditProfile;
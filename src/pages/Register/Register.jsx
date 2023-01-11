import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AddAchievement.css"; 
import {makefields, addUserdataApiFunction, getFieldsByAPI} from './RegisterFunctions';
import Loader from "../../components/Loader/Loader";
import {CustomToastContainer,ToastSuccess, ToastPromise} from "../../components/Toast/Toast";
const tempMap = {
    "BP": "BooksPublished",
    "CP": "ConferenceProceedings",
    "JR" : "Journal",
    "AW": "Award"
}
const AddAchievement = () => {
    const location = useLocation();
    const prop = location.state.name == "View All" ? "Books Published" :location.state.name || localStorage.getItem('Achievement')||"Books Published";
    // alert(prop);
    const [achievement, setAchievement] = useState(AchievementDropDown[prop]||"BP");
    const [AchievementSchemaData, setAchievementSchemaData] = useState({});
    const [Loading, setLoading] = useState(true);
    const navigate = useNavigate();
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
    
    const addAndToast = async(e, type) => {
        await ToastPromise(addUserdataApiFunction(e, tempMap[achievement]), "Adding User Data","Registered", "Error Adding User Data")
        .then((resp)=>{
          navigate(-1);
        })
    }
    let flag = false;
    return (
        <div className="root bg-blue">
        <div className=" main-div  w-1/2   md:w-1/2 ml-auto mr-auto mb-4 mt-3 border leading-6 px-2 py-2.5 rounded-2xl ">
            <form className="">
                <div className="" id="add-UserData ">
                   
                    {Loading&&<Loader />}
                    <div id="fields" className="  mb-3  mt-5 p-5  rounded-xl ml-auto mr-auto bg-lavendar" style={{border:"none",boxShadow:"none"}}>

                        <div id="sub-fields" className="Userdata-field mb-3"></div>
                    </div>
                   
                </div>
                <div className="btn-div mt-0">
                <button type="submit" className="submit-btn text-white bg-blue-700 hover:bg-800 focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-md  mt-0 w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" value = {achievement} 
                onClick={(e)=>addAndToast(e, tempMap[achievement])}>SUBMIT</button>

                </div>
            </form>
           
            <CustomToastContainer/>
        </div> </div>



    )
}
export default AddAchievement;
// field mb-3  mt-5 p-5 border rounded-xl ml-auto mr-auto 
//sub mb-3
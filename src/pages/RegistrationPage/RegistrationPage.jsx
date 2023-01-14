import "./Registration.css";
import InputFields from "../../components/Registration/InputFields";
import React from "react";
import ProfileField  from "../../constants/ProfileField";

const RegistrationPage=()=>{
     // console.log(ProfileField );
     const propertyNames = Object.keys(ProfileField);
     const propertyValues = Object.values(ProfileField);

     // Object.keys(ProfileField).forEach(key => {
     //      console.log(key, ProfileField[key]);
     //    }); 
     return(
          <main>
          <div className="root">
          <div className="maindiv w-1/2   md:w-1/2 ml-auto mr-auto mb-4 mt-3 border leading-6 px-2 py-2.5 rounded-2xl"  > 
          <p className=" text-black text-2xl font-medium px-2 py-2 text-center mx-2 my-2">REGISTER HERE</p> 
          <form action="">

          <div className="" id="addAchievement ">

          <div id="fields" className="  mb-3  mt-5 p-5  rounded-xl ml-auto mr-auto bg-lavendar" style={{border:"none",boxShadow:"none"}}>

          <div id="sub-fields" className="register-field mb-3">
               {
                 propertyValues.map((e)=>{ 

                    console.log(e);
                    return(
                         <InputFields data={e} />
                    )
                 }).slice(0,7)
                  }
               </div>
               <div className="btn-div mt-0">
                <button type="submit" className="submit-btn text-white bg-blue hover:bg-800 focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-lg text-md  mt-0 w-full sm:w-auto px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >SUBMIT</button>
               </div>
           


                </div>
               </div>
          </form>
          </div>

          </div>
          </main>
        
     )
}
export default RegistrationPage;
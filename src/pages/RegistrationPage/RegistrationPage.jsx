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
          <div className="main">  
          <form action="">
               <div className="field">
               {
                 propertyValues.map((e)=>{ 

                    console.log(e);
                    return(
                         <InputFields data={e} />
                    )
                 }).slice(0,7)
                  }

               </div>
          </form>
          </div>
        
     )
}
export default RegistrationPage;
import React from "react";
// import "./Registration.css";
// import "constant./ProfileField";

const InputFields=({data})=>{
     return(
          <div className="subfields">

               <label htmlFor="" className="field-label"> 
               {data}
               </label>
               <input type="text" name="" id="" />
          </div>
        
     )
}
export default InputFields;
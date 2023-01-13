import React from "react";

const InputFields=({data})=>{
     return(

     <div className="Registerform ">
        <div class="md:flex md:items-left mb-6">

               <div class="md:w-1/3">
               <label htmlFor="" className="field-label block font-medium  md:text-left mb-1 md:mb-0 pt-3 pr-4" > 
               {data}
               </label>
               </div>

               <div class="md:w-2/3">
               <input name=""  className="textField bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-full-name" type="text"/>
               </div>

          </div>
     </div>
     )
}
export default InputFields;
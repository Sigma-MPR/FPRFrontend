import "./FeedbackForm.css";
import FeedbackFields from "../../components/FeedbackFields/FeedbackFields";
import React from "react";
import ProfileField  from "../../constants/ProfileField";
// FeedbackForm

const FeedbackForm=()=>{
      console.log(ProfileField );
     //const propertyNames = Object.keys(ProfileField);
     const propertyValues = Object.values(ProfileField);

     // Object.keys(ProfileField).forEach(key => {
     //      console.log(key, ProfileField[key]);
     //    }); 
     return(
          <main>
          <div className="root">
          <div className="maindiv w-1/2   md:w-1/2 ml-auto mr-auto mb-4 mt-3 border leading-6 px-2 py-2.5 rounded-2xl"  > 
          <p className=" text-black text-2xl font-medium px-2 py-2 text-center mx-2 my-2">FEEDBACK FORM</p> 
          <form action="">

          <div className="" id="addFeedback">

          <div id="fields" className="  mb-3  mt-5 p-5  rounded-xl ml-auto mr-auto bg-lavendar" style={{border:"none",boxShadow:"none"}}>

          <div id="sub-fields" className="feedback-field mb-3">
               {
                 propertyValues.map((e)=>{ 

                    console.log(e);
                    return(
                         <FeedbackFields data={e} />
                    )
                 }).slice(0,2)
                  }
               </div> 
               <div className="feedbackField px">
                    <textarea name="" id="" cols="30" rows="20" placeholder="Enter your feedback here" className="px-2 py-2 mb-4 mt-4 rounded-md border-slate-700 border-solid border-4 "></textarea>
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
export default FeedbackForm;
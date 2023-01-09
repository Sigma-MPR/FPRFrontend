import React from "react";

export default function Button(props) {
    return (
        props.available?
        <span>
             <button type="button" className=" bg-blue text-light-beige font-bold text-base hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900  rounded-lg  px-5 py-2.5 inline-flex justify-center w-11/12 text-center" >{props.text}</button>
        </span>
        :
        <span>
             <button type="button" className="bg-blue  text-light-beige font-bold hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 rounded-lg text-base px-5 py-2.5 inline-flex justify-center w-11/12 text-center">{props.text}</button>
        </span>
    )
}
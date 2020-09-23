import React from "react";

const setAutoHeight = (e)=>{
    e.target.style.height = `${e.target.scrollHeight}px`;
}

const TextField = (props)=>{
    const {field, form, meta} = props;
    console.log("Render props:", props);
    return(
        <div>
            <textarea id="address" onInput={setAutoHeight} {...field}></textarea>
        </div>
    )
}

export default TextField;
import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";
import Search from "./components/Search";
import YoutubeForm from "./components/YoutubeForm";
import ApolloForm from "./components/ApolloForm";
import "./App.css";
// import "./YoutubeApp.css";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
    {
        title: "What is react?",
        content: "React is a front rend js framework"
    },
    {
        title: "Wht use React?",
        content: "React is a favorate JS library among engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components"
    }
]

const options = [
    {
        label:"The Color Red",
        value:"red"
    },
    {
        label:"The Color Green",
        value:"green"
    },
    {
        label:"A Shade of blue",
        value:"blue"
    }
]

export default ()=>{

    // const [selected,setSelected] = useState(options[0]);
    // const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className="App">
            {/* <Accordion items={items}/>
            <Counter />
            <Search/>
            <YoutubeForm/> */}
            <ApolloForm/>
            {/* <button onClick={()=>{setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
            {showDropdown?
                <Dropdown 
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                /> :null
            } */}
            {/* <Translate/> */}
        </div>
    );
}
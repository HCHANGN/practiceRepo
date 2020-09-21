import React from "react";
import Accordion from "./components/Accordion";
import Counter from "./components/Counter";
import Search from "./components/Search";
import YoutubeForm from "./components/YoutubeForm";
import ApolloForm from "./components/ApolloForm";
import "./App.css";

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

export default ()=>{
    return (
        <div className="App">
            {/* <Accordion items={items}/>
            <Counter />
            <Search/>
            <YoutubeForm/> */}
            <ApolloForm/>
        </div>
    );
}
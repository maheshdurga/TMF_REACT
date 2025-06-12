import React from "react";
import { createRoot } from "react-dom/client";
const root=document.getElementById("root");
import Restaurant from "./componets/Restaurant";
import Header from "./componets/header";
import Footer from "./componets/Footer";
import "./style.css";




const RootElement=createRoot(root);
const App=()=>{
    return(<div>
    <h1>welcome</h1>
        <Header/>
        <Restaurant/>
        <Footer/>
    </div>)
}
RootElement.render(<App/>)

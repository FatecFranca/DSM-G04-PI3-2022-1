import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './component/Home/Home.js';
import SelectionTheme from './component/SelectionTheme/SelectionTheme.js';
import Questions from './component/Questions/Questions.js';
import Result from "./component/Result/Result.js";


function Routers(){
    return(
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/selection-theme" element={<SelectionTheme/>}/>
            <Route exact path="/questions" element={<Questions/>}/>
            <Route exact path="/result" element={<Result/>}/>
        </Routes>
    )
}

export default Routers;
import React from "react";
import Home from "./component/User/Home/Home.js"
import Questions from "./component/User/Questions/Questions.js";
import SelectionTheme from "./component/User/SelectionTheme/SelectionTheme";
import Result from "./component/User/Result/Result"

import { Route, Routes } from 'react-router-dom'

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/selection-theme" element={<SelectionTheme/>}/>
            <Route exact path="/questions" element={<Questions/>}/>
            <Route exact path="/result" element={<Result/>}/>
        </Routes>
    );
}

export default Routers


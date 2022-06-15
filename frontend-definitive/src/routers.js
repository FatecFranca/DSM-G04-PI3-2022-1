import React from "react";
import Home from "./component/User/Home/Home.js"
import Questions from "./component/User/Questions/Questions.js";
import SelectionTheme from "./component/User/SelectionTheme/SelectionTheme";
import Result from "./component/User/Result/Result"
import AdminHome from "./component/Admin/AdminHome/AdminHome.js";
import AdminQuestions from "./component/Admin/AdminQuestions/AdminQuestions.js";
import AdminUsers from "./component/Admin/AdminUsers/AdminUsers.js";
import AdminAnswers from "./component/Admin/AdminAnswers/AdminAnswers.js";
import { Route, Routes } from 'react-router-dom'

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/selection-theme" element={<SelectionTheme/>}/>
            <Route exact path="/questions/:id" element={<Questions/>}/>
            <Route exact path="/result" element={<Result/>}/>
            <Route exact path="/admin-home" element={<AdminHome/>} />
            <Route exact path="/admin-questions" element={<AdminQuestions/>} />
            <Route exact path="/admin-answers" element={<AdminAnswers/>} />
            <Route exact path="/admin-users" element={<AdminUsers/>} />
            
        </Routes>
    );
}

export default Routers


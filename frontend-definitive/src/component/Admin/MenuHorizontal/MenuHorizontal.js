import React from "react";
import { Link } from 'react-router-dom'
import "./MenuHorizontal.css"

function MenuHorizontal() {
//  const navigate = useNavigate()
  return (
    <div className="menuHorizontal">
      <nav className='navMenu'>
                <ul>
                    {/* <li> <Link to="/"> Login </Link> </li> */}
                    <li> <Link to="/admin-home" > Home </Link></li>
                    <li> <Link to="/admin-questions"> Questions </Link> </li>
                    <li> <Link to="/admin-answers"> Answers </Link> </li>
                    <li> <Link to="/admin-users"> Users </Link> </li>
                    <li> <Link to="/"> Logout </Link> </li>
                </ul>

            </nav>

    </div>
  );
}

export default MenuHorizontal;

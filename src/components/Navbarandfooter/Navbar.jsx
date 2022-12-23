import React from "react";
import { NavLink } from "react-router-dom";
import "../../Navfootcss/navbar.css";
import logo from "../../assets/paytm_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="navbar_div">
        <div>
          <img className="imagelogo" src={logo} alt="" />
        </div>
        <div className="navbar">
          <ul className="ul_links">
            <NavLink className="navlink" to="">
              Paytm Past Consumer
            </NavLink>
            <NavLink className="navlink" to="">
              Paytm For Buisness
            </NavLink>
            <NavLink className="navlink" to="">
              Investores Relation
            </NavLink>
            <NavLink className="navlink" to="">
              Company
            </NavLink>
            <NavLink className="navlink" to="/">
              Career
            </NavLink>
          </ul>
        </div>
        <div className="login_btn">
          <button className="button">Signin</button>
          <div className="profile_usericon_div">
          <FontAwesomeIcon  className="profile_user_icon"icon={faUser} />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Navbar;

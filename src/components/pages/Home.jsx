import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import "../../Pagescss/Home.css";
import { faAppleAlt,faPlay } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="Home_parent_div">
      <div className="text">
        <p className="text-center p-3">
          <span>No Wallet KYC Required😊to pay using UPI on Paytm.</span>
          <span>
            <NavLink
              style={{
                textDecoration: "none",
              }}
            >
              Learn more
            </NavLink>
          </span>
        </p>
      </div>
      <div className="home_content_div">
        <div className="content_img_div">
          <div className="img_div">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view/310944/1654517453942.png"
              alt=""
              className="paytm_img"
            />
          </div>
          <div className="content_div">
            <h1>India's Most-loved</h1>
            <h1>Payments App</h1>
            <div className="paragraph_div">
              <span>Recharge & pay bills, book flights & movie tickets,</span>
              <span>open a savings account, invest in stocks & mutual</span>
              <span>funds, and do a lot more.</span>
            </div>
            <div className="button-btn_div">
              <button className=" btn-button p-2">
                Download Paytm App
              </button>
              
              <FontAwesomeIcon    className="Appleicon" icon={faAppleAlt}/>
              <FontAwesomeIcon  className="Playstoreicon" icon={faPlay}/>
            </div>
          </div>
        </div>

        <div className="img_div_2">
          <img
            className="some_mobile_image"
            src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1656568118664.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

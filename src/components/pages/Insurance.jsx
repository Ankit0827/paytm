import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Insurance = () => {
  return (
    <div className='insurance_parent_div'>
       <div className="home_content_div">
        <div className="content_img_div">
          <div className="financial_img_div">
            <img
              src="		https://assetscdn1.paytm.com/images/catalog/view/308775/1653901470333.jpeg"
              alt=""
              className="financial_paytm_img"
              style={{
                paddingTop:"6rem"
              }}
            />
          </div>
          <div className="financial_content_div">
            <h1>Insurance made easy.</h1>
            <div className="paragraph_div">
              <span>Buying insurance does not have to be tedious, time-</span>
              <span>consuming & confusing. Paytm Insurance removes the</span>
              <span>worry of getting insured by making it simple,</span>
              <span>convenient & easy-to-understand.</span>
            </div>
            <div className="learnmore_button-btn_div">
              <button className=" btn-button1 p-2">
                Learn More
              </button>
              <FontAwesomeIcon className="Angle_right" icon={faAngleRight}/>
            </div>
          </div>
        </div>

        <div className="financial_img_div_2">
          <img
            className="insurance_some_mobile_image "
            src="		https://assetscdn1.paytm.com/images/catalog/view_item/788790/1653913927257.png"
            alt=""

            style={{
              width:"27rem"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Insurance

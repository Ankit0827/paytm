import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight } from "@fortawesome/free-solid-svg-icons";
import '../../Pagescss/financial.css'

const Financial = () => {
  return (

    <div className='financial_parent_div'>
       <div className="home_content_div">
        <div className="content_img_div">
            <div className="financial_heading_div">
                <h1 className="financial_heading">
                Financial Services by Paytm
                </h1>
            </div>
          <div className="financial_img_div">
            <img
              src="	https://assetscdn1.paytm.com/images/catalog/view/307193/1617696576778.png"
              alt=""
              className="financial_paytm_img"
            />
          </div>
          <div className="financial_content_div">
            <h1>India's most sincere</h1>
            <h1>Bank</h1>
            <div className="paragraph_div">
              <span>Paytm Payments Bank offers secure, transparent and</span>
              <span>risk-free banking at your fingertips. With instant</span>
              <span>account opening, virtual debit card and zero balance</span>
              <span>requirements, experience the future of banking today.</span>
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
            className="financial_some_mobile_image"
            src="	https://assetscdn1.paytm.com/images/catalog/view_item/728826/1626076427497.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Financial

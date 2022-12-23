import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight } from "@fortawesome/free-solid-svg-icons";
import '../../Pagescss/postpaid.css'

const Postpaid = () => {
  return (
    <div className='postpaid_parent_div'>
      <div className="payment_content_div">
        <div className="content_img_div">
          <div className="wallet_img_div">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view/307191/1613622537678.png"
              alt=""
              className="paytmpost_img"
            />
            
          </div>
          <div className="content_div1">
            <h1 className='payment_heading1'>Want it?</h1>
            <h1 className='payment_heading1'>No more waiting for it.</h1>
            <div className="payment_paragraph_div">
              <span>With Paytm Postpaid, your wishlist doesn't have to be</span>
              <span>on the waitlist. Shop for the things you want today and</span>
              <span>pay for them next month.</span>
            </div>
            <div className="learnmore_button-btn_div">
              <button className=" btn-button1 p-2">
                Learn More
              </button>
              <FontAwesomeIcon className="Angle_right" icon={faAngleRight }/>
            </div>
          </div>
        </div>

        <div className="payment_img_div_2">
          <img
            className="some_mobile_image"
            src="	https://assetscdn1.paytm.com/images/catalog/view_item/850764/1626077030984.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Postpaid

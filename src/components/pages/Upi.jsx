import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt,faPlay } from "@fortawesome/free-solid-svg-icons";
import '../../Pagescss/upi.css'

const Upi = () => {
  return (
    <div className='upi_parent_div'>
        <div className="upi_content_div">
        <div className="content_img_div">
          <div className="wallet_img_div">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png"
              alt=""
              className="paytm_img"
            />
            <div className="payment_span_div">
               <span>UPI Money</span>
               <span>Trasfer</span>
            </div>
          </div>
          <div className="content_div1">
            <h1 className='payment_heading1'>Pay anyone directly</h1>
            <h1 className='payment_heading1'>from your bank</h1>
            <h1 className='payment_heading1'>account.</h1>
            <div className="payment_paragraph_div">
              <span>Pay anyone, everywhere. Make contactless & secure</span>
              <span>payments in-stores or online using Paytm Wallet or</span>
              <span>Directly from your Bank Account. Plus, send & receive</span>
              <span>money from anyone.</span>
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

        <div className="payment_img_div_2">
          <img
            className="some_mobile_image"
            src="	https://assetscdn1.paytm.com/images/catalog/view_item/728702/1626342071104.png"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Upi

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt,faPlay } from "@fortawesome/free-solid-svg-icons";
import '../../Pagescss/payment.css'
import Upi from './Upi'
import Postpaid from './Postpaid';
import Paytmbank from './Paytmbank';

const Payment = () => {
  return (
    <div className='payment_parent_div'>
        <div className="payment_heading">
            <h1 className="heading">
            Paytm Payment Instruments
            </h1>
        </div>
        <div className="payment_content_div">
        <div className="content_img_div">
          <div className="wallet_img_div">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view/307185/1617861564011.png"
              alt=""
              className="paytm_img"
            />
            <div className="payment_span_div">
               <span>Paytm</span>
               <span>Wallet</span>
            </div>
          </div>
          <div className="content_div1">
            <h1 className='payment_heading1'>The Fastest Way to</h1>
            <h1 className='payment_heading1'>Pay In-store & Online.</h1>
            <div className="payment_paragraph_div">
              <span>Load up your Paytm Wallet for free and make payments</span>
              <span>in a jiffy at over 21 million stores, websites and apps.</span>
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
            src="	https://assetscdn1.paytm.com/images/catalog/view_item/728701/1618577020961.png"
            alt=""
          />
        </div>
      </div>
      <Upi/>
      <Postpaid/>
      <Paytmbank/>
    </div>
  )
}

export default Payment

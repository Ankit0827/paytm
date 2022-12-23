import React from 'react'
import '../../Pagescss/paytmmoney.css'
import {faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Paytmmoney = () => {
  return (
    <div className='paytmmoney_parent_div'>
      <div className="paytmmoneyimg_div">
          <img src="https://assetscdn1.paytm.com/images/catalog/view_item/788781/1626077377376.png" alt="" className="paytmmoney_img1" />
      </div>

      <div className="paytmmoney_content_img_div">
          <div className="paytmmoney_img_div">
            <img src="https://assetscdn1.paytm.com/images/catalog/view/308774/1617696247991.png" alt="" className="paytmmoney_img2" />
          </div>
           <div className="paytmmoney_content_div">
            <div className="paytmmoney_heading_div">
                <h1>Build Long-term</h1>
                <h1>Wealth & Achieve</h1>
                <h1>your Goals.</h1>
            </div>
            <div className="paragraph_div">
                <span>Investing on Paytm Money is transparent, low-cost and</span>
                <span>commission-free. Buy stocks & mutual funds that can</span>
                <span>help you create wealth & realise your dreams.</span>
            </div>
            <div className="learnmore_button-btn_div">
              <button className=" btn-button1 p-2">
                Learn More
              </button>
              <FontAwesomeIcon className="Angle_right" icon={faAngleRight}/>
            </div>
           </div>
      </div>


    </div>
  )
}

export default Paytmmoney;

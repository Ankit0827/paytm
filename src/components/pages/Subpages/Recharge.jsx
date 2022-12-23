import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../Pagescss/Recharge.css";
import {faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Recharge = () => {
  return (
    <div className="recharge_parent_div">
      <div className="heading_div">
        <h1 className="heading">Recharge & Pay Bills on Paytm.</h1>
      </div>

{/* ......information about recharge_div.......................... */}

      <div className="all_rechargetype_div">

        <div className="recharge_sub_div1">
          <div className="mobile_recharge">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view_item/733299/1626251017535.png"
              alt=""
              className="mobile_image_recharge"
            />
          </div>
          <div className="recharge_heading_div1">
            <span className="text1">Recharge</span>
            <span className="text1">Prepaid</span>
            <div className="last_span_div">
            <span className="text1">Mobile</span>
            <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>
          </div>
        </div>

{/*...............................sub_div2............................ */}

        <div className="recharge_sub_div2">
          <div className="mobile_recharge">
            <img
              src="	https://assetscdn1.paytm.com/images/catalog/view_item/733308/1626251043534.png"
              alt=""
              className="mobile_image_recharge"
            />
          </div>
          <div className="recharge_heading_div1">
          <span className="text1">Pay</span>
            <span className="text1">Electricity</span>
            <div className="last_span_div">
            <span className="text1">Bill</span>
            <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>          
           </div>
        </div>

{/*......................sub_divb_3..............................  */}

        <div className="recharge_sub_div3">
          <div className="mobile_recharge">
            <img
              src="	https://assetscdn1.paytm.com/images/catalog/view_item/733311/1626251101045.png"
              alt=""
              className="mobile_image_recharge"
            />
          </div>
           <div className="recharge_heading_div1">
             <span className="text1">Recharge</span>
             <span className="text1">DTH</span>
             <div className="last_span_div">
                  <span className="text1">Connection</span>
                  <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>          
        </div>
        </div>

{/*................................sub_div4..............................  */}

        <div className="recharge_sub_div4">
          <div className="mobile_recharge">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view_item/733307/1626251127863.png"
              alt=""
              className="mobile_image_recharge"
            />
          </div>
          <div className="recharge_heading_div1">
          <span className="text1">Book</span>
            <span className="text1">Gas</span>
            <div className="last_span_div">
            <span className="text1">Cylinder</span>
            <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>
          </div>
        </div>

{/*...............................sub_div5................................  */}

        <div className="recharge_sub_div5">
          <div className="mobile_recharge">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view_item/733304/1627454209116.png"
              alt=""
              className="mobile_image_recharge"
            />
          </div>
          <div className="recharge_heading_div1">
          <span className="text1">Pay</span>
            <span className="text1">Cradit</span>
            <div className="last_span_div">
            <span className="text1"> Card Bill</span>
            <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>
          </div>
        </div>

{/*.......................sub_div6......................................  */}

        <div className="recharge_sub_div6">
          <div className="mobile_recharge">
            <img
              src="	https://assetscdn1.paytm.com/images/catalog/view_item/757701/1626268580682.png"
              alt=""className="mobile_image_recharge" />
          </div>
          <div className="recharge_heading_div1">
          <span className="text1">All</span>
            <span className="text1">Payment</span>
            <div className="last_span_div">
            <span className="text1">Services</span>
            <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
};

export default Recharge;

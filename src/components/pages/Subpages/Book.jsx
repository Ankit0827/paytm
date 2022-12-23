import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleRight } from "@fortawesome/free-solid-svg-icons";

import '../../../Pagescss/Book.css'


const Book = () => {
  return (
    <div className='book_parent_div'>
       <div className="heading_div">
        <h1 className="heading">Book & Buy on Paytm.</h1>
      </div>

{/* ......information about recharge_div.......................... */}

      <div className="all_rechargetype_div">

        <div className="recharge_sub_div1">
          <div className="mobile_recharge">
            <img
              src="	https://assetscdn1.paytm.com/images/catalog/view_item/733295/1626259710574.png"
              alt=""
              className="mobile_image_recharge"
            />
          </div>
          <div className="recharge_heading_div1">
            <span className="text1">Movie</span>
            <div className="last_span_div">
            <span className="text1">Tickets</span>
            <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>
          </div>
        </div>

{/*...............................sub_div2............................ */}

        <div className="recharge_sub_div2">
          <div className="mobile_recharge">
            <img
              src="	https://assetscdn1.paytm.com/images/catalog/view_item/733296/1626259884425.png"
              alt=""
              className="mobile_image_recharge"
            />
          </div>
          <div className="recharge_heading_div1">
            <span className="text1">Flight</span>
            <div className="last_span_div">
            <span className="text1">Tickets</span>
            <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>          
           </div>
        </div>

{/*......................sub_divb_3..............................  */}

        <div className="recharge_sub_div3">
          <div className="mobile_recharge">
            <img
              src="		https://assetscdn1.paytm.com/images/catalog/view_item/729996/1626260477699.png"
              alt=""
              className="mobile_image_recharge"
            />
          </div>
           <div className="recharge_heading_div1">
             <span className="text1">Bus</span>
             <div className="last_span_div">
                  <span className="text1">Tickets</span>
                  <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>          
        </div>
        </div>

{/*................................sub_div4..............................  */}

        <div className="recharge_sub_div4">
          <div className="mobile_recharge">
            <img
              src="	https://assetscdn1.paytm.com/images/catalog/view_item/729997/1626260495975.png"
              alt=""
              className="mobile_image_recharge"
            />
          </div>
          <div className="recharge_heading_div1">
            <span className="text1">Train</span>
            <div className="last_span_div">
            <span className="text1">Tickets</span>
            <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>
          </div>
        </div>

{/*...............................sub_div5................................  */}

        <div className="recharge_sub_div5">
          <div className="mobile_recharge">
            <img
              src="https://assetscdn1.paytm.com/images/catalog/view_item/729998/1666185237748.png"
              alt=""
              className="mobile_image_recharge"
            />
          </div>
          <div className="recharge_heading_div1">
            <span className="text1">Buy</span>
            <div className="last_span_div">
            <span className="text1">Insurance</span>
            <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>
          </div>
        </div>

{/*.......................sub_div6......................................  */}

        <div className="recharge_sub_div6">
          <div className="mobile_recharge">
            <img
              src="	https://assetscdn1.paytm.com/images/catalog/view_item/729999/1626259968563.png"
              alt=""className="mobile_image_recharge" />
          </div>
          <div className="recharge_heading_div1">
            <span className="text1">International</span>
            <div className="last_span_div">
            <span className="text1">Flights</span>
            <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>
          </div>
        </div>

        {/* .................................subdiv_7................. */}
        <div className="recharge_sub_div6">
          <div className="mobile_recharge">
            <img
              src="		https://assetscdn1.paytm.com/images/catalog/view_item/730001/1626450848003.png"
              alt=""className="mobile_image_recharge" />
          </div>
          <div className="recharge_heading_div1">
            <span className="text1">Invest</span>
            <div className="last_span_div">
            <span className="text1">in Stocks</span>
            <FontAwesomeIcon icon={faAngleRight} className="faAngleRight"/>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Book

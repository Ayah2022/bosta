import React, { Component } from 'react';
import PropTypes from 'prop-types';
import img from '../assets/photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';

 class TrackingView extends Component {
 
    render() {
        const {CurrentStatus,CreateDate,TrackingNumber,TransitEvents,PromisedDate }=this.props.trackDetails;
        console.log(CurrentStatus.state + "  " +CreateDate+ "  "+ TrackingNumber+ "  "+ TransitEvents[0].state)
        
        const dateObject = new Date(CreateDate);
        const lastDate = dateObject.toLocaleString("ar-EG", {weekday: "long"}) + " " +
                         dateObject.toLocaleString("ar-EG", {year: "numeric"}) + "/" +
                         dateObject.toLocaleString("ar-EG", {month: "numeric"}) + "/" +
                         dateObject.toLocaleString("ar-EG", {day: "numeric"}) + " في " +
                         dateObject.toLocaleTimeString('ar-EG',{hour: '2-digit', minute:'2-digit'}).replace(/(:\d{2}| [AP]M)$/, "");
                         //if arabic time" ar-EG" if english" en-us"
        // const humanDateFormat = dateObject.toLocaleString() ;
        const dateObject2 = new Date(PromisedDate);
        const promisedDate= dateObject2.toLocaleString("ar-EG", {day: "numeric"}) + " " +
                            dateObject2.toLocaleString("ar-EG", {month: "long"}) + " " +
                            dateObject2.toLocaleString("ar-EG", {year: "numeric"}) ;
        const toLocalString  = (time,type) => {
            if(type === "time"){
            const timeformat= new Date(time);
           return timeformat.toLocaleTimeString('ar-EG',{hour: '2-digit', minute:'2-digit'}).replace(/(:\d{2}| [AP]M)$/, "") ;
            }else{
                const timeformat= new Date(time);
                const date = timeformat.toLocaleString("ar-EG", {year: "numeric"})  + "/ " +
                             timeformat.toLocaleString("ar-EG", {month: "numeric"}) + "/" +
                             timeformat.toLocaleString("ar-EG", {day: "numeric"})  ;
           return date ;
            }
        }
        return (
            <React.Fragment>
            <div className={CurrentStatus.state === "DELIVERED"? " trackDetailsSection green" 
                :CurrentStatus.state === "CANCELED"? " trackDetailsSection red"
                :" trackDetailsSection yellow"} >
                <div className="container"> 
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="d-flex flex-column justify-content-end">
                                <div className="d-flex align-items-baseline firstRow"><h4>رقم الشحنة <span>{TrackingNumber}</span></h4></div>
                                <div className="d-flex align-items-baseline secondRow ">{CurrentStatus.state === "DELIVERED"? <h3  className="state">تم تسليم الشحنة</h3>
                                                                                :CurrentStatus.state === "DELIVERED_TO_SENDER"? <h3  className="state">تم استلام الشحنة من التاجر</h3>
                                                                                :CurrentStatus.state === "CREATED"? <h3  className="state">تم انشاء الشحنة</h3>
                                                                                :CurrentStatus.state === "OUT_TO_DELIVERY"? <h3>الشحنة خرجت للتسليم</h3>  
                                                                                :CurrentStatus.state === "CANCELED"? <h3  className="state">تم الغاء الشحنة</h3>: ""    }</div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                        <div className="d-flex flex-column justify-content-end">
                                <div className="d-flex align-items-baseline firstRow"><h4> اخر تحديث </h4></div>
                                <div className="d-flex align-items-baseline secondRow"><h3>{lastDate}</h3></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                        <div className="d-flex flex-column justify-content-end">
                                <div className="d-flex align-items-baseline firstRow"><h4> اسم التاجر  </h4></div>
                                <div className="d-flex align-items-baseline secondRow"><h3>SOUQ.com</h3></div>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                        <div className="d-flex flex-column justify-content-end">
                                <div className="d-flex align-items-baseline firstRow"><h4> موعد التسليم خلال   </h4></div>
                                <div className="d-flex align-items-baseline secondRow"><h3>{promisedDate}</h3></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container ">
                    <div className="row trackCycle">
                        <div className="d-flex align-items-start flex-column trackCycle_section">
                            <div className={CurrentStatus.state === "DELIVERED" ? "line green"
                                            :CurrentStatus.state === "OUT_TO_DELIVERY" || "DELIVRED_TO_SENDER" ? "line yellow"
                                            :CurrentStatus.state === "CANCELED"? "line red"
                                            : "line grey"}></div>
                            <div className={CurrentStatus.state === "DELIVERED" ? "trackCycle_section_content green"
                                            :CurrentStatus.state === "OUT_TO_DELIVERY" || "DELIVRED_TO_SENDER" ? "trackCycle_section_content yellow"
                                            :CurrentStatus.state === "CANCELED"? "trackCycle_section_content red"
                                            : "trackCycle_section_content grey"}><FontAwesomeIcon icon={CurrentStatus.state === "DELIVERED" ||"OUT_TO_DELIVERY" || "DELIVRED_TO_SENDER"  ? faCheckCircle
                                                                                                        :faShippingFast}/>
                        </div>
                        <p>تم انشاء الشحنة</p></div>
                        <div className="d-flex align-items-start flex-column trackCycle_section">
                            <div className={CurrentStatus.state === "DELIVERED" ? "line green"
                                            :CurrentStatus.state === "OUT_TO_DELIVERY"  ? "line yellow"
                                            :CurrentStatus.state === "CANCELED"? "line red"
                                            : "line grey"}></div>
                            <div className={CurrentStatus.state === "DELIVERED" ? "trackCycle_section_content green"
                                            :CurrentStatus.state === "OUT_TO_DELIVERY"? "trackCycle_section_content yellow"
                                            :CurrentStatus.state === "CANCELED"? "trackCycle_section_content red"
                                            : "trackCycle_section_content grey"}><FontAwesomeIcon icon={CurrentStatus.state === "DELIVERED" ||"OUT_TO_DELIVERY" || "DELIVRED_TO_SENDER"  ? faCheckCircle
                                                                                                        :faShippingFast} />
                        </div>
                        <p>تم استلام الشحنة من التاجر</p></div>
                        <div className="d-flex align-items-start flex-column trackCycle_section">
                            <div className={CurrentStatus.state === "DELIVERED" ? "line green"
                                            :CurrentStatus.state === "CANCELED"? "line red"
                                            : "line grey"}></div>
                            <div className={CurrentStatus.state === "DELIVERED" ? "trackCycle_section_content green"
                                            :CurrentStatus.state === "CANCELED"? "trackCycle_section_content red"
                                            : "trackCycle_section_content grey"}><FontAwesomeIcon icon={CurrentStatus.state === "DELIVERED" ||"OUT_TO_DELIVERY" || "DELIVRED_TO_SENDER"  ? faCheckCircle
                                            :faShippingFast} />
                        </div>
                        <p>الشحنة خرجت للتسليم</p></div>
                        <div className="d-flex align-items-start flex-column trackCycle_section">
                            <div className={CurrentStatus.state === "DELIVERED" ? "trackCycle_section_content green"
                                            :CurrentStatus.state === "CANCELED"? "trackCycle_section_content red"
                                            : "trackCycle_section_content grey"}><FontAwesomeIcon icon={CurrentStatus.state === "DELIVERED" ||"OUT_TO_DELIVERY" || "DELIVRED_TO_SENDER"  ? faCheckCircle
                                                                                                        :faShippingFast} />
                        </div>
                        <p>تم التسليم </p></div>
                    </div>
                </div>
            </div>
            <div className="container shipmentDetails">
                <div className="row">
                    <div className="col-md-8 col-12">
                        <h3 className="text-end mt-5">تفاصيل الشحنة</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-3">
                                    <p>الفرع</p>
                                </div>
                                <div className="col-md-2 col-3">
                                    <p>التاريخ</p>
                                </div>
                                <div className="col-md-2 col-3">
                                    <p>الوقت</p>
                                </div>
                                <div className="col-md-4 col-3">
                                    <p>تفاصيل</p>
                                </div>
                            </div>
                            {TransitEvents.length > 0 ? TransitEvents.map((event,index) => {
                                    return(
                                       event.state !== ""? <div className="row" key={index}>
                                            <div className="col-md-4 col-3">
                                                <p>{event.hub !== "" ? event.hub : ""}</p>
                                            </div>
                                            <div className="col-md-2 col-3">
                                                <p>{event.timestamp !== ""? (toLocalString(event.timestamp,"date")): ""}</p>
                                            </div>
                                            <div className="col-md-2 col-3">
                                                <p>{event.timestamp !== ""? (toLocalString(event.timestamp,"time")): ""}</p>
                                            </div>
                                            <div className="col-md-4 col-3">
                                                <p className="d-flex flex-column align-items-baseline">{event.state === "TICKET_CREATED"? "تم انشاء الشحنة"
                                                    :event.state === "PACKAGE_RECEIVED"? "تم استلام الشحنة من التاجر"
                                                    :event.state === "OUT_FOR_DELIVERY"? "الشحنة خرجت للتسليم"
                                                    :event.state === "DELIVERED"? "تم التسليم"
                                                    :event.state === "WAITING_FOR_CUSTOMER_ACTION"? "  معاد التسليم تأجل"
                                                    :event.state === "IN_TRANSIT"? " في طريقها إلينا "
                                                    :event.state === "NOT_YET_SHIPPED"? "لم يتم شحنها بعد  "
                                                    :null} {event.hasOwnProperty('reason') ? (<span>{event.reason} </span>) :"" }</p>
                                            </div>
                                        </div> :null
                                        
                                    )
                                })
                                :""
                            }
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-5 pt-4">
                        <div className="d-flex  jusitfy-content-between align-items-center questionBox">
                            <div><img src={img} alt="question-mark"/> </div>
                            <div className="d-flex flex-column flex-end">
                                <p>هل يوجد مشكلة في شحنتك ؟</p>
                                <button>ابلاغ عن مشكلة</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </React.Fragment>


        )
    }
}
const trackingViewPropTypes ={
    CurrentStatus: PropTypes.objectOf(PropTypes.shape({
        state:  PropTypes.string,
        timeStamp: PropTypes.string
    }).isRequired),
    CreateDate: PropTypes.string.isRequired,
    PromisedDate:PropTypes.string.isRequired,
    TrackingNumber: PropTypes.string.isRequired,
    TransitEvents: PropTypes.arrayOf(PropTypes.shape({
        state:  PropTypes.string,
        timeStamp: PropTypes.string,
        hub: PropTypes.string,
        reason:PropTypes.string
    }).isRequired)
}
TrackingView.propTypes = trackingViewPropTypes;

export default TrackingView;

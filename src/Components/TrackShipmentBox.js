
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';

 class TrackShipmentBox extends Component {
    
    render() {
        const handleSubmit = (e) =>{
            this.props.handleSubmit(e);
        }
        return (
            <div className="track_box mt-md-5 mt-3">
            <h1>الرجاء إدخال رقم الشحنة وتتبع الشحنة الخاصة بك</h1>
            <h2>تتبع شحنة أخرى</h2>
            <form className="track_box_form d-flex" onSubmit={handleSubmit}>
                <input type="number" id="track_value" placeholder="رقم الشحنة." ></input>
                <button className="track_box_form_btn"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
        </div>
        )
    }
}
export default TrackShipmentBox;

import React from 'react';
import classes from '../App.css';

const Seats = (props) => {

    return (
        // <div className={classes.section}>
        <div className="section">
            {props.values.map(seat => {
                const isAvailable = props.availableSeats.includes(seat);
                const isBooked = props.bookedSeats.includes(seat);
                let seatClass;
                if(!isAvailable) {
                    seatClass = classes.disabled;
                }
                if(isBooked) {
                    seatClass = classes.booked;
                }
                return <div className="section" onClick={props.addSeat} key={seat}>{seat}</div>;
                //return <div className={seatClass} onClick={props.addSeat} key={seat}>{seat}</div>;
            })}
        </div>
    );
}
export default Seats;
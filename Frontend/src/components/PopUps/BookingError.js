import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BookingError extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h6>Leider ist etwas schiefgelaufen. Bitte versuchen sie es erneut</h6>
                    <Link to='/' className="btn-primary">Zur Startseite</Link>
                </div>
            </div>
        );
    }
}
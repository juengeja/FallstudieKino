import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BookingSuccessful extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h6>Vielen Dank für Ihre Bestellung. Sie werden in Kürze eine Bestätigungs-Email erhalten.</h6>
                    <Link to='/' className="btn-primary">Zur Startseite</Link>
                </div>
            </div>
        );
    }
}
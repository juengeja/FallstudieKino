import React, {Component} from 'react';
import {FaCalendar, FaPhoneAlt, FaMailBulk, FaLocationArrow} from 'react-icons/fa';
import Title from './Title';

export default class Contact extends Component {
    state={
        services:[
            {
                icon:<FaCalendar/>,
                title:"Öffunungszeiten",
                info:'Mo - Fr: 10 - 24 Uhr / Sa, So: 14 - 24 Uhr'
            },
            {
                icon:<FaPhoneAlt/>,
                title:"0123 / 456789",
                info:'Mo - Fr: 10 - 18 Uhr / Sa, So: 14 - 18 Uhr'
            },
            {
                icon:<FaMailBulk/>,
                title:"kino@kino.de",
            },
            {
                icon:<FaLocationArrow/>,
                title:"Am Kino 1, 12345 Kinohausen",
            }
        ]
    };
    render() {
        return(
            <div data-testid="services-1">
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                         </article>
                        );
                    })}
                </div>
            </section>
            </div>
        );
    }
}
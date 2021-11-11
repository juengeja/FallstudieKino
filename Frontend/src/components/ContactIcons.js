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
                title:"Telefonnummer",
                info:"(02229) 703739400",
                link: "tel:+492229703739400"
            },
            {
                icon:<FaMailBulk/>,
                title:"E-Mail",
                info:"info@indigo-bw.de",
                link: "mailto:info@indigo-bw.de"
            },
            {
                icon:<FaLocationArrow/>,
                title:"Adresse",
                info:"Coblitzallee 1-9, 68163 Mannheim"
            }
        ]
    };
    render() {
        return(
            <div data-testid="services-1">
            <section className="services">
                <Title title="Kontaktdaten" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (
                            <article key={index} className="service">
                                <a href={item.link}>
                                <span>{item.icon}</span>
                                </a>
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
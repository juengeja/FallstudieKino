import React, {Component} from 'react';
import {FaCocktail, FaInstagram, FaBtc} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Snacks und Getränke",
                info:'Wir bieten die besten Snacks und Getränke, um Sie während einer Vorstellung bestmöglichst zu versorgen. '
            },
            {
                icon:<FaInstagram/>,
                title:"Social Media",
                info:'Folge uns auf unseren Social Media Kanälen wie Instagram und Twitter um keine neuen Filme mehr zu verpassen.'
            },
            {
                icon:<FaBtc/>,
                title:"Zahlungsweisen",
                info:'Wir bieten dir eine entspannte Zahlung mit renomierten Cryptowährungen wir Bitcoin an'
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
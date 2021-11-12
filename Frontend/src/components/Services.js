import React, {Component} from 'react';
import {FaCocktail, FaInstagram, FaBtc} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Snacks und Getränke",
                info:'Essen und Trinken ist für uns nicht nur Nahrungsaufnahme. Es tut auch der Seele gut und sorgt für Gesellschaft. Bei uns gibt es die individuellsten Snacks zum Film!',
                link:'/gastro'
            },
            {
                icon:<FaInstagram/>,
                title:"Social Media",
                info:'Folge uns auf unseren Social Media Kanälen wie Instagram und Twitter um keine neuen Updates mehr von uns zu verpassen.',
                link:"https://www.instagram.com/memes_dhbw_mannheim/"
            },
            {
                icon:<FaBtc/>,
                title:"Zahlungsweisen",
                info:'Wir bieten dir vielfältige Zahlungsarten an, damit der Kaufvorgang für dich so angenehm wie möglich ist.',
                link:'/payment'
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
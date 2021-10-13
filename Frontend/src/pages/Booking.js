import axios from 'axios';
import React, {Component} from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom'
import {FaInfo, FaCreditCard, FaShoppingCart} from 'react-icons/fa';


export default class Booking extends Component {
    constructor(props){
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            street: '',
            number: '',
            city: '',
            zip: '',
            email: '',
            pay_method: '',
        }
    };

        handleChange =(e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    
      handleSubmit = event => {
        event.preventDefault();
    
        axios.post('https://httpbin.org/post', this.state)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

    render() {
/*
        let ShoppingCart = this.props.items.map(item=>{
            return(
                <li class="li-container" key={item.id}>
                            <div class=""> 
                                <img src={item.img} alt={item.img} class="cart-entry-img"/>
                            </div>
                        
                            <div className="cart-entry-details">
                                <h6 className="title">{item.movie}</h6>
                                <h6>{item.event}</h6>
                                <h6>Preis: {item.price}€</h6> 
                                <h6>Gewählte Sitze: {item.seats}</h6> 
                            </div>                                   
                        </li>
            )
        })
*/
        return (
            <>
            <Hero hero = 'programHero'>
                <Banner title="Buchung">
                </Banner>
            </Hero>
            
            <div className="booking-wrapper">
            <div class="booking-container">
                <form onSubmit={this.handleSubmit}>
                    <h6 class="headline">
                            <FaInfo />Persönliche Daten
                    </h6>

                    <div class="input-container">
                        <div>
                            <label for="first_name">Vorname</label>
                            <input type="text" name="first_name" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label for="last_name">Nachname</label>
                            <input type="text" name="last_name" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="input-container">
                        <div>
                            <label for="street">Straße</label>
                            <input type="text" name="street" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label for="number">Hausnummer</label>
                            <input type="text" name="number" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div class="input-container">
                        <div>
                            <label for="city">Stadt</label>
                            <input type="text" name="city" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label for="zip">PLZ</label>
                            <input type="text" name="zip" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label for="email">E-Mail Adresse</label>
                            <input type="text" name="email" onChange={this.handleChange} />
                        </div>
                    </div>

                    <h6 class="headline">
                        <FaCreditCard/> Zahlungsart
                    </h6>
                    <div class="input-container">
                        <button name="pay_method" onChange={this.handleChange}>Kreditkarte</button>
                        <button name="pay_method" onChange={this.handleChange}>PayPal</button>
                        <button name="pay_method" onChange={this.handleChange}>Rechnung</button>
                        <button name="pay_method" onChange={this.handleChange}>Bar</button>
                    </div>

                    <h6 class="headline">
                        <FaShoppingCart/> Bestellübersicht
                    </h6>

                    <div class="btns">
                        <Link to='/shoppingCart' className="btn-primary">Zurück zum Warenkorb</Link>
                        <button class="btn-primary" type="submit">Zahlungspflichtig bestellen</button>
                    </div>
                </form>
            </div>
            </div> 
            </> 
        );
    }
}

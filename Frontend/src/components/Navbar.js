import React, { Component } from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle = () => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render (){
        return <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Kino"/>
                    </Link>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                        <FaAlignRight className="nav-icon" />
                    </button>    
                </div>
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Startseite</Link>
                    </li>
                    <li>
                        <Link to="/program">Programm</Link>
                    </li>
                    <li>
                        <Link to="/contact">Kontakt</Link>
                    </li>
                    <li>
                        <Link to="/login"><FaUserAlt className="nav-icon-login"/></Link>
                    </li>
                    <li>
                        <Link to="/shoppingCart"><FaShoppingCart className="nav-icon-shoppingCart"/></Link>
                    </li>
                </ul>
           </div>
        </nav>
    }
}
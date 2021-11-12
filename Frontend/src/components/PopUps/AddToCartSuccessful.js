import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

export default class AddToCartSuccessful extends Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h6>Der Film wurde erfolgreich zum Warenkorb hinzugefügt!</h6>
            <Link to='/shoppingCart' className="btn-primary">Zum Warenkorb</Link>
            <h3 />
            <HashLink to='/gastro/#menues' className="btn-primary">Menü hinzufügen</HashLink>
            <h3 />
            <Link to='/program' className="btn-primary">Weiteren Film hinzufügen</Link>
          </div>
        </div>
      );
    }
  }
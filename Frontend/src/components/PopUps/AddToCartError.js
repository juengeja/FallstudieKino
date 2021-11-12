import React, { Component } from 'react';

export default class AddToCartError extends Component {
  
    render() {
      function refreshPage() {
        window.location.reload();
      }
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h6>Ihr gewählter Sitzplatz ist leider bereits vergeben</h6>
            <button onClick={refreshPage} className="btn-primary">Bitte wählen sie einen anderen</button>
          </div>
        </div>
      );
    }
  }
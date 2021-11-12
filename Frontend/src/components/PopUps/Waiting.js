import React, { Component } from 'react';
import loadingGif from '../../images/gif/small-loading-arrow.gif';

export default class Waiting extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <div className="loading" data-testid="loading-1">
                          <h4>Daten werden verarbeitet...</h4>
                          <img src={loadingGif} alt="" />
                      </div>
                </div>
            </div>
        );
    }
  }

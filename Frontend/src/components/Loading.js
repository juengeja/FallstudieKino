import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

export default function Loading() {
    return (
        <div className="loading" data-testid="loading-1">
            <h4>Filmdaten werden geladen...</h4>
            <img src={loadingGif} alt="" />
        </div>
    );
}
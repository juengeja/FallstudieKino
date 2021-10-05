import React from 'react'

export default function Banner({children, title, subtitle}){
    return(
        <div className="banner" data-testid="banner-1">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
import React from 'react'
export default function Title ({title,subtitle}) {
    return (
        <div className="section-title" data-testid="title-1">
            <h4>{title}</h4>
            <h6>{subtitle}</h6>
            <div />
        </div>
    )
}
import React from 'react'
export default function Title ({title}) {
    return (
        <div className="section-title" data-testid="title-1">
            <h4>{title}</h4>
            <div />
        </div>
    )
}
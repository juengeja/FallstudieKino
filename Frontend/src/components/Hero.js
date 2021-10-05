import React from 'react'

export default function Hero({children,hero}){
    return (
        <div data-testid="hero-1">
    <header className={hero}>{children}</header>
    </div>
    );
}

Hero.defaultProps = {
    hero:'defaultHero'
};
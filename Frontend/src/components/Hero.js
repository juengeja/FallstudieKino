import REact from 'react'

export default function Hero({children,hero}){
    return <header className={hero}>{children}</header>
}

Hero.defaultProps = {
    hero:'defaultHero'
};
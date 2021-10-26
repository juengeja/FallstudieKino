import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedMovies from '../components/FeaturedMovies';
import Slideshow from '../components/slideshow';

export default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Willkommen" subtitle="nur heute, jeder Film 8€">
                    <Link to='/program' className="btn-primary">
                        Zum Programm
                    </Link>
                </Banner>
            </Hero>
            <FeaturedMovies />
            <Services />
            <Slideshow />
        </>
    );
}


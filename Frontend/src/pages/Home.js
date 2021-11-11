import React, {useEffect} from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedMovies from '../components/FeaturedMovies';
import Slideshow from '../components/slideshow';
import ScrollButton from '../components/ScrollButton';

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <Hero>
                <Banner title="Willkommen in deinem INDIGO BW" subtitle="nur heute, jeder Film 8€">
                    <Link to='/program' className="btn-primary">
                        Zum Programm
                    </Link>
                </Banner>
            </Hero>
            <section>
                <div class="home">
                    <h6>
                    Herzlich Willkommen in deinem INDOGO BW 
                    <br />
                    Deinem Erlebnis-Kino in Mannheim direkt in der DHBW.
                    <br />
                    <br />
                    In unseren 3 renovierten Sälen, die über eine komplett neue, sehr bequeme Bestuhlung verfügen, 
                    <br />
                    bieten wir dir Kino mit Komfort in modernster digitaler Bild- und Tontechnik.
                    <br />
                    <br />
                    Parken kannst du bequem direkt vor dem Haus - und ohne Kosten.
                    <br />
                    <br />
                    Telefon: (02229) 703739400
                    <br />
                    <br />
                    Wir freuen uns auf deinen Besuch!
                    </h6>
                </div>
            </section>
            <FeaturedMovies />
            <Services />
            <Slideshow />
            <ScrollButton />
        </>
    );
}


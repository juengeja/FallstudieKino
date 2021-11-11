import React, {useEffect} from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ProgramContainer from '../components/ProgramContainer';
import ScrollButton from '../components/ScrollButton';

const Program = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
        <Hero hero="programHero">
            <Banner title="Programm" />
        </Hero>
        <ProgramContainer />
        <ScrollButton />
    </>
    );
};

export default Program
import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import ProgramContainer from '../components/ProgramContainer';
import Title from '../components/Title'

const Program = () => {
    return (
        <>
        <Hero hero="programHero">
            <Banner title="Programm" />
        </Hero>
        <ProgramContainer />
    </>
    );
};

export default Program
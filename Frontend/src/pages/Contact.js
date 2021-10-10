import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import ContactIcons from '../components/ContactIcons';

export default function Contact() {
    return (
        <>
        <Hero hero="programHero">
            <Banner title="Kontakt" />
        </Hero>
        <ContactIcons />

        <section className="slide-show">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1304432.0324541556!2d6.856442213048547!3d50.31583929932359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c8be397add6f%3A0xe9445ca638828a81!2sKino%201%20%2B%202!5e0!3m2!1sde!2sde!4v1633861463929!5m2!1sde!2sde" 
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"/>
   </section>

        </>
    );
}
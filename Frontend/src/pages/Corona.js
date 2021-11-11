import React, {useEffect} from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import Title from '../components/Title';
import ScrollButton from '../components/ScrollButton';

export default function Corona() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <Hero hero="coronaHero">
                <Banner title="Infektionsschutz" />
            </Hero>

            <section className="contact">
            <Title title="Informationen für deine Sicherheit" />
                <h6>
                Aktuell ist zum Besuch eines Kinos der Nachweis einer vollständigen Impfung bzw. Genesung oder eines negativen Tests erforderlich, der maximal 48 Stunden alt sein darf. Ausgenommen hiervon sind Kinder und Schüler.
                <br />
                <br />
                Bitte bringe zum Kinobesuch ein Ausweisdokument mit (Personalausweis bzw. Schülerausweis). Im Wartebereich vor dem Kino und im Foyer ist ein Mund- und Nasenschutz zu tragen (mindestens OP-Maske).
                <br />
                <br />
                Zur Vermeidung von Wartezeiten buche bitte dein Ticket online! Der Preis ist derselbe wie an der Kinokasse!
                </h6>
            </section>
            <ScrollButton />
        </>
    );
}
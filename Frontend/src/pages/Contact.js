import React,{useEffect} from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import ContactIcons from '../components/ContactIcons';
import Title from '../components/Title';
import ScrollButton from '../components/ScrollButton';

export default function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <Hero hero="infoHero">
                <Banner title="Info" />
            </Hero>

            <section className="contact">
                Bitte beachte, dass wir keine Reservierungen per E-Mail oder Kontaktformular entgegen nehmen können. Nutze dazu bitte unser Onlineticketing.
                <br />
                <br />
                Die Kinokasse erreichst du täglich ab ca. 15 min. vor der ersten Vorstellung unter der oben angegebenen Rufnummer. Bitte habe Verständnis dafür, dass es unseren Mitarbeitern nicht immer möglich ist (beispielsweise zu Vorstellungsbeginn), deinen Anruf entgegenzunehmen.
                <br />
                <br />
                Die telefonische Programmansage erreichst du unter der Rufnummer 0229-73263-401.
                <br />
                <br />
                Unsere Öffnungszeiten orientieren sich am Programm. Die Kasse ist i. d. R. 30 min. vor dem ersten Filmbeginn besetzt.
            </section>

            <ContactIcons />

            <section className="contact">
                <Title title="Anfahrt" />
                Bitte beachte, dass zu normalen Vorlesungszeiten die Parkplätze am und um das Kino knapp werden können. Wir empfehlen eine zeitige Anreise bzw. die Benutzung der öffentlichen Verkehrsmittel.
                <br />
                <br />
                Mit den öffentlichen Verkahrsmitteln erreichst du uns per Bus oder Straßenbahn. Hier kannst du dir den Linienplan der RVN herunterladen. Die INDIGO BW befindet sich an der Haltestelle "Duale Hochschule" - unschwer zu finden in der Nähe der DHBW.
            </section>

            

            <section className="slide-show">
                <iframe src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Coblitzallee%20+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="trailer"
                    width="100%"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0" />
            </section>
            <ScrollButton />
        </>
    );
}
import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import Title from '../components/Title';
import payment from '../images/payment.png'
import ScrollButton from '../components/ScrollButton';

export default function paymentMethod() {

    return (
        <>
            <Hero hero="paymentHero">
                <Banner title="Zahlungsmittel" />
            </Hero>

            <section className="payment">
                <Title title="Unsere sicheren Online-Zahlungsmittel im Überblick" />
                Auf unseren Webseiten bieten wir euch verschiedene Zahlungsmöglichkeiten zur Auswahl an. Damit könnt ihr schnell und bequem eure Tickets auch von Zuhause oder unterwegs online kaufen.
                < br />
                < br />
                Unsere Zahlungsmöglichkeiten im Überblick:

                <div className="payments">
                    <b>Paypal</b>
                    <br />
                    Wenn der Einkauf über Paypal erfolgt, gibst du deine bei Paypal hinterlegte E-Mail Adresse und dein Kennwort ein. Dann musst du nur noch bestätigen und der Kauf ist abgeschlossen.
                    < br />
                    < br />
                    <b>Klarna (Rechnung)</b>
                    < br />
                    Mit Klarna kannst du ganz einfach auf Rechnung zahlen. Du hast ab dem Rechnungsdatum 14 Tage Zeit zu bezahlen.
                    < br />
                    < br />
                    <b>Sofortüberweisung</b>
                    < br />
                    Bei der Sofortüberweisung wird das Geld direkt überwiesen. Dazu brauchst du allerdings ein Online-Banking Konto.
                    < br />
                    < br />
                    <b>Giropay</b>
                    < br />
                    Giropay findet ebenfalls auf der Basis von Online-Banking statt. Das Geld wird direkt von der jeweiligen Bank abgebucht.
                    < br />
                    < br />
                    <b>Lastschrift</b>
                    < br />
                    Wir ziehen den Rechnungsbetrag deiner Bestellung von deinem hinterlegten Bankkonto nach der getätigten Bestellung ein. [Plus 2 Euro Gebühr]
                    < br />
                    < br />
                    <b>Kreditkarte</b>
                    < br />
                    Zahle ganz einfach per Kreditkarte.
                    < br />
                    < br />
                    <b>Vorkasse</b>
                    < br />
                    Bitte überweise den Gesamtbetrag deiner Bestellung auf unser Konto.
                    < br />
                    < br />
                </div>

                <img src={payment} alt={payment} />

            </section>
            <ScrollButton />
        </>
    );
}
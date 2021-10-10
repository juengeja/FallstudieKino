import React from 'react';
import { Slide } from 'react-slideshow-image';
import Title from './Title';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  'https://media0.faz.net/ppmedia/aktuell/3728414784/1.5850716/mmobject-still_full/aus-cinestar-mach-cinemaxx.jpg',
  'https://cdn.cinemaxx.de/-/media/images/cinemaxx/da-muss-ich-rein/bremen/bremen-bild1.jpg',
  'https://www.hamburg.de/image/3664034/16x9/990/557/98f96d2c22e6f8393aaf74216588d5c0/ZU/cinemaxx-dammtor-foto.jpg',
  'https://i1.wp.com/www10.aeccafe.com/blogs/arch-showcase/files/2016/12/12_Lippo-Village-Maxx-Box-Cinema-main-lobby.jpg',
  'https://mar.prod.image.rndtech.de/var/storage/images/gt-et/die-region/goettingen/goettingen-cinemaxx-erstrahlt-nach-millionumbau-in-neuem-look/729714717-3-ger-DE/Goettinger-CinemaxX-fuer-rund-zwei-Millionen-umgebaut_reference_4_3.jpg',
];


const Slideshow = () => {
    return (
    <section className="slide-show">
        <Title title="Impressionen" />
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
                <div style={{'backgroundImage': `url(${slideImage})`}}> 
              </div>
            </div>
          ))} 
        </Slide>
    </section>
    )
}

export default Slideshow;
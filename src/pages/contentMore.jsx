import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import HeroSectionContentMore from '../components/heroSectionContentMore';
import InfiniteCarousel from '../components/InfiniteCarousel';
import AdditionalContent from '../components/additionalContent';
import Destinations from '../../destinations.json';

const ContentMore = ( { handleLogout } ) => {
    return (
        <div className="content">
            <div className='background_image_container'>
                <div className='div_background_image'>
                    <img className='background_image' src='/img/Content_galaxie.jpeg' alt='background' />
                    <Header handleLogout={handleLogout} />
                    <HeroSectionContentMore />
                </div>
            </div>
            <main className='contentMoreMain'>
                <section className='sectionContentMore2 max_width1440'>
                    <h2>Les Galaxies : Structures Fondamentales de l'Univers</h2>
                    <p>Une galaxie est un vaste ensemble d'étoiles, de gaz, de poussières et de matière noire, toutes liées par la gravité. Ces structures cosmiques contiennent des milliards d'étoiles, ainsi que des systèmes solaires, des nébuleuses et des trous noirs. Les galaxies jouent un rôle crucial dans la dynamique cosmique et sont organisées en divers groupes, amas et superamas.
                    </p>
                </section>
                <section className='sectionContentMore3 max_width1440'>
                    <h2>Origine des Galaxies</h2>
                    <p>L'origine des galaxies remonte aux premiers instants de l'univers, peu après le Big Bang, il y a environ 13,8 milliards d'années. À cette époque, l'univers était un mélange homogène de particules subatomiques et de radiations. Environ 400 000 ans après le Big Bang, lors de l'ère de la recombinaison, les premiers atomes se sont formés, permettant à la lumière de voyager librement. De petites fluctuations de densité dans la matière primordiale ont conduit à l'agrégation de gaz et de poussières sous l'influence de la gravité, formant les premiers halos de matière noire. Ces halos ont attiré davantage de matière, donnant naissance aux premières étoiles et amas stellaires, qui se sont regroupés pour former des galaxies primitives.
                    </p>
                </section>
                <section className='sectionContentMore4 max_width1440'>
                    <h2>La Voie Lactée et les Étoiles en Fuite</h2>
                    <p>La Voie lactée, la galaxie qui abrite notre Système solaire, contient quelques centaines de milliards d'étoiles et s'étend sur environ 80 000 années-lumière. Un rapport de la mission spatiale européenne Gaia a révélé la position de près de 1,7 milliard d'étoiles de notre galaxie, représentant moins de 1 % de sa population stellaire totale.
                    Il est important de noter que toutes les étoiles ne font pas nécessairement partie des galaxies. Certaines étoiles, appelées « étoiles en fuite », peuvent être expulsées de leur galaxie d'origine suite à des interactions galactiques ou à des rencontres rapprochées avec des objets massifs, tels que des trous noirs supermassifs. Par exemple, des étoiles comme SDSS J090745.0+024507 et GRO J1655-40 quittent actuellement la Voie lactée, ayant probablement été expulsées par des forces gravitationnelles intenses. 
                    Sur la base des observations actuelles, on estime que l'univers observable contient quelques centaines de milliards de galaxies de masse significative. Cependant, le nombre exact de galaxies, y compris les galaxies naines peu lumineuses, pourrait atteindre jusqu'à 2 000 milliards. Ce chiffre ne pourra être confirmé qu'avec les futures observations des télescopes de nouvelle génération.
                    </p>
                </section>
            </main>
            <AdditionalContent />
            <InfiniteCarousel datas={Destinations} />
            <Footer />
        </div>
    )
}

export default ContentMore;
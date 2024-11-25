import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import HeroSectionContent from '../components/heroSectionContent';
import AdditionalContent from '../components/additionalContent';
import InfiniteCarousel from '../components/InfiniteCarousel';
import Destinations from '../../destinations.json';


const Content = ( { handleLogout } ) => {
    return (
        <div className="content">
            <div className="div_background_image">
                <Header handleLogout={handleLogout} />
                <HeroSectionContent />
            </div>
            <main>
                <section className="section2">
                    <h2 className='max_width1440'>Qu'est ce qu'une galaxie ?</h2>
                    <img src="/img/Content_galaxie.jpeg" alt="Illustration galaxie" />
                    <p className='max_width1440'>Une galaxie est un vaste ensemble d'étoiles, de gaz, de poussières et de matière noire, toutes liées par la gravité. Elles contiennent des milliards d'étoiles et peuvent également abriter des systèmes solaires, des nébuleuses et des trous noirs. Les galaxies sont des structures fondamentales de l'univers, organisées en divers groupes et amas, jouant un rôle crucial dans la dynamique cosmique.</p>
                </section>
                <section className="section3 max_width1440">
                    <h2>Quels sont les origines des galaxies ?</h2>
                    <p>L'origine des galaxies remonte aux premiers instants de l'univers, peu après le Big Bang, il y a environ 13,8 milliards d'années. Après le Big Bang, l'univers était un mélange homogène de particules subatomiques et de radiations. Environ 400 000 ans après le Big Bang, lors de l'ère de la recombinaison, les premiers atomes se sont formés, permettant à la lumière de voyager librement. De petites fluctuations de densité dans la matière primordiale ont conduit à l'agrégation de gaz et de poussières sous l'influence de la gravité, formant les premiers halos de matière noire. Ces halos ont attiré davantage de matière, donnant naissance aux premières étoiles et amas stellaires, qui se sont regroupés pour former des galaxies primitives.</p>
                    <button className='button_content'>En savoir plus</button>
                </section>
                <AdditionalContent />
                <InfiniteCarousel datas={Destinations} />
            </main>
            <Footer />
        </div>
    )
}

export default Content;
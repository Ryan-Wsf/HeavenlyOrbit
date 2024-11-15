import React from 'react';
import { HashLink } from 'react-router-hash-link';

const HeroSection = () => {
    return (
        <section id="section1">
            <div>
                <h1>Bienvenue sur HeavenlyOrbit</h1>
                <h2>Explorez les merveilles de l'univers depuis chez vous</h2>
                <HashLink to="/#section2" className="anim_undercase">Commencez l'exploration</HashLink>
            </div>
        </section>
    )
}

export default HeroSection;
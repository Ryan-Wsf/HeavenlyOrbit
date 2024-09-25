import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Section1 = () => {
    return (
        <section id="section1">
            <div>
                <h1>Bienvenue sur HeanvlyOrbit</h1>
                <h2>Explorez les merveilles de l'univers depuis chez vous</h2>
                <HashLink to="#/section2" className="anim_undercase">Commencez l'exploration</HashLink>
            </div>
        </section>
    )
}

export default Section1;
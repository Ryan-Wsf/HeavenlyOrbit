import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div id="div_background_image">
            <header>
                <div className="max_width1440">
                    <Link id="logo" to="/" >HeavenlyOrbit</Link>
                    <nav>
                        <ul>
                            <li><Link to="#" className="anim_undercase">Accueil</Link></li>
                            <li><HashLink smooth to="/#section2" className="anim_undercase">Exploration</HashLink></li>
                            <li><HashLink smooth to="/#section3" className="anim_undercase">Quizz</HashLink></li>
                            <li><Link to="#" className="anim_undercase">Connexion</Link></li>
                            <li><Link to="#" className="anim_undercase">Inscription</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section id="section1">
                <div>
                    <h1>Bienvenue sur HeanvlyOrbit</h1>
                    <h2>Explorez les merveilles de l'univers depuis chez vous</h2>
                    <Link to="#section2" className="anim_undercase">Commencez l'exploration</Link>
                </div>
            </section>
        </div>
    )
}

export default Header;
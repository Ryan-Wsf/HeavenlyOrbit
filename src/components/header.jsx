import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ handleLogout }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour ouvrir/fermer le menu

    useEffect(() => {
        setIsAuthenticated(localStorage.getItem("token") ? true : false);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Inverse l'état du menu au clic
    };

    return (
        <header>
            <div className="max_width1440">
                <Link id="logo" to="/" >HeavenlyOrbit</Link>
                <nav className={`main_nav ${isMenuOpen ? 'open' : ''}`}>  {/* Ajouter la classe open si isMenuOpen est vrai */}
                    <ul>
                        <li><Link to="/" className="anim_undercase">Accueil</Link></li>
                        <li><HashLink smooth to="/#section2" className="anim_undercase">Exploration</HashLink></li>
                        <li><HashLink smooth to="/#section3" className="anim_undercase">Quizz</HashLink></li>
                        {isAuthenticated ? (
                            <li><Link to="/" onClick={handleLogout} className="anim_undercase">Déconnexion</Link></li>
                        ) : (
                            <>
                                <li><Link to="/login" className="anim_undercase">Connexion</Link></li>
                                <li><Link to="/register" className="anim_undercase">Inscription</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
                <Link to="#" className="icon_menu" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </Link>
            </div>
        </header>
    );
};

export default Header;

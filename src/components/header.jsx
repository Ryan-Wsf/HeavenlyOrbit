import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useAuthStore from '../store/authStore';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuthStore();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogoutClick = () => {
        logout();
        navigate('/');
    };

    return (
        <header>
            <div className="max_width1440">
                <Link id="logo" to="/" >HeavenlyOrbit</Link>
                <nav className={`main_nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/" className="anim_undercase">Accueil</Link></li>
                        <li><HashLink smooth to="/#section2" className="anim_undercase">Exploration</HashLink></li>
                        <li><HashLink smooth to="/#section3" className="anim_undercase">Quizz</HashLink></li>
                        {isAuthenticated ? (
                            <>
                                <li><Link to="#" className="anim_undercase">Mon compte</Link></li>
                                <li><Link to="/" onClick={handleLogoutClick} className="anim_undercase">Déconnexion</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/login" className="anim_undercase">Connexion</Link></li>
                                <li><Link to="/register" className="anim_undercase">Inscription</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
                <button className="icon_menu" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </header>
    );
};

export default Header;

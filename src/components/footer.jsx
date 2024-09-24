import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer>
            <div className='max_width1440'>
                <nav>
                    <ul>
                        <li><Link to="/" className="anim_undercase">Accueil</Link></li>
                        <li><HashLink smooth to="/#section2" className="anim_undercase">Exploration</HashLink></li>
                        <li><HashLink smooth to="/#section3" className="anim_undercase">Quizz</HashLink></li>
                        <li><Link to="#" className="anim_undercase">Connexion</Link></li>
                        <li><Link to="#" className="anim_undercase">Inscription</Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li><Link to="#" className="anim_undercase">Email</Link></li>
                        <li><Link to="#" className="anim_undercase">Facebook</Link></li>
                        <li><Link to="#" className="anim_undercase">Instagram</Link></li>
                        <li><Link to="#" className="anim_undercase">Twitter</Link></li>
                        <li><Link to="#" className="anim_undercase">Github</Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li><Link to="#" className="anim_undercase">Mention légales</Link></li>
                        <li><Link to="#" className="anim_undercase">Politique de confidentialité</Link></li>
                        <li><Link to="#" className="anim_undercase">Condition d'utilisation</Link></li>
                        <li><Link to="#" className="anim_undercase">FAQ</Link></li>
                        <li><Link to="#" className="anim_undercase">Support technique</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}

export default Footer;
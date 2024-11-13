import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div>
                <nav>
                    <ul>
                        <li><Link to="#" className="anim_undercase">Email</Link></li>
                        <li><Link to="#" className="anim_undercase">Instagram</Link></li>
                        <li><Link to="#" className="anim_undercase">Github</Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul>
                        <li><Link to="#" className="anim_undercase">Mention légales</Link></li>
                        <li><Link to="#" className="anim_undercase">Politique de confidentialité</Link></li>
                        <li><Link to="#" className="anim_undercase">Condition d'utilisation</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='footer_copyright'>
                <p>© 2024 HeavenlyOrbit</p>
            </div>
        </footer>
    )
}

export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css';

const Register = () => {
    return (
        <div id="div_background_image">
            <div className='opacity_background max_width500'>
                <h1>Inscription</h1>
                <form action="#">
                    <div className='div_input'>
                        <label htmlFor="lastname">Nom</label>
                        <input type="text" id="lastname" name="lastname" placeholder="Nom" />
                    </div>
                    <div className='div_input'>
                        <label htmlFor="name">Prenom</label>
                        <input type="text" id="name" name="name" placeholder="Prenom" />
                    </div>
                    <div className='div_input'>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Email" />
                    </div>
                    <div className='div_input'>
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id="password" name="password" placeholder="Mot de passe" />
                    </div>
                    <p>Vous avez déjà un compte ? <Link to="#" className='anim_undercase'>Se connecter</Link></p>
                    <button type="submit" className='anim_undercase'>Inscription</button>
                </form>
            </div>
        </div>
    )
}

export default Register;
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="account">
            <div id="div_background_image">
                <div className='opacity_background max_width500'>
                    <h1>Inscription</h1>
                    <form action="#">
                        <div className='div_input'>
                            <input type="text" id="lastname" name="lastname" placeholder='Nom' />
                        </div>
                        <div className='div_input'>
                            <input type="text" id="name" name="name" placeholder='Prenom' />
                        </div>
                        <div className='div_input'>
                            <input type="email" id="email" name="email" placeholder='Email' />
                        </div>
                        <div className='div_input'>
                            <input type="password" id="password" name="password" placeholder='Mot de passe' />
                        </div>
                        <p>Vous avez déjà un compte ? <Link to="/login" className='anim_undercase'>Se connecter</Link></p>
                        <button type="submit" className='anim_undercase'>Inscription</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
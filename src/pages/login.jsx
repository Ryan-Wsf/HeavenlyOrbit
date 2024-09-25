import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="account">
            <div id="div_background_image">
                <div className='opacity_background max_width500'>
                    <h1>Connexion</h1>
                    <form action="#">
                        <div className='div_input'>
                            <input type="email" id="email" name="email" placeholder='Email' />
                        </div>
                        <div className='div_input'>
                            <input type="password" id="password" name="password" placeholder='Mot de passe' />
                        </div>
                        <p>Vous n'avez pas de compte ? <Link to="/register" className='anim_undercase'>S'inscrire</Link></p>
                        <p>Mot de passe oublié ? <Link to="/forgotPassword" className='anim_undercase'>Cliquez-ici.</Link></p>
                        <button type="submit" className='anim_undercase'>Connexion</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div className="account">
            <div id="div_background_image">
                <div className='opacity_background max_width500'>
                    <h1>Mot de passe oublié ?</h1>
                    <p>Entrez votre adresse mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.</p>
                    <form action="#">
                        <div className='div_input'>
                            <input type="email" id="email" name="email" placeholder='Email' />
                        </div>
                        <p>Je connais mon mot de passe : <Link to="#" className='anim_undercase'>Se connecter</Link></p>
                        <button type="submit" className='anim_undercase'>Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;
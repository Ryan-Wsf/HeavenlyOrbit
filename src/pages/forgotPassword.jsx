import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../api/bookApi';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            console.log('Envoi de l\'email à:', email);
            const response = await forgotPassword(email);
            console.log('Réponse reçue:', response);
            if (response && response.message) {
                setMessage('Un email de réinitialisation a été envoyé.');
            } else {
                setError('Une erreur est survenue.');
            }
        } catch (err) {
            console.error('Erreur détaillée:', err);
            setError(`Impossible d'envoyer l'email: ${err.message}`);
        }
    };

    return (
        <div className="account">
            <div id="div_background_image">
                <div className='opacity_background max_width500'>
                    <h1>Mot de passe oublié ?</h1>
                    <p>Entrez votre adresse mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.</p>
                    {message && <p className="success-message">{message}</p>}
                    {error && <p className="error-message">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className='div_input'>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <p>Je connais mon mot de passe : <Link to="/login" className='anim_undercase'>Se connecter</Link></p>
                        <button type="submit" className='anim_undercase'>Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;

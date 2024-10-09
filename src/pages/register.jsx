import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api/bookApi';

const Register = () => {
    const [lastname, setLastname] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async(e) => {
        setMessage("");
        setError("");
        e.preventDefault();
        try {
            if (password !== passwordConfirmation) {
                setError('Les mots de passe ne correspondent pas. Veuillez réessayer.');
                return;
            }
            const data = await register({ lastname, name, email, password, passwordConfirmation });
            console.log(data);
            localStorage.setItem('token', data.token);
            setMessage('Inscription réussie. Merci de vous connecter.');
            navigate('/login');
        } catch (error) {
            setError("L'email est déjà utilisé. Veuillez réessayer avec un autre email.");
            console.error('Erreur d\'inscription', error);
        }
    };
    
    return (
        <div className="account">
            <div id="div_background_image">
                <div className='opacity_background max_width500'>
                    <h1>Inscription</h1>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className='div_input'>
                            <input
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder="Nom"
                                required
                            />
                        </div>
                        <div className='div_input'>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Prenom"
                                required
                            />
                        </div>
                        <div className='div_input'>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className='div_input'>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Mot de passe"
                                required
                            />
                        </div>
                        <div className='div_input'>
                            <input
                                type="password"
                                value={passwordConfirmation}
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                placeholder="Confirmer le mot de passe"
                                required
                            />
                        </div>
                        <p>Vous avez déjà un compte ? <Link to="/login" className='anim_undercase'>Se connecter</Link></p>
                        {message && <p className="message">{message}</p>}
                        <button type="submit" className='anim_undercase'>Inscription</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
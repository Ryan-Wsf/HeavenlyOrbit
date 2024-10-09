import React from 'react';
import { login } from '../api/bookApi';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        setMessage("");
        setError("");
        e.preventDefault();
        try {
            const data = await login({ email, password });
            console.log(data)
            localStorage.setItem('token', data.token);
            setMessage('Connexion réussie. Merci de vous connecter.');
            navigate('/');
        } catch (error) {
            setError("L'email ou le mot de passe est incorrect. Veuillez réessayer.");
            console.error('Erreur de connexion', error);
        }
    };
    return (
        <div className="account">
            <div id="div_background_image">
                <div className='opacity_background max_width500'>
                    <h1>Connexion</h1>
                    {error && <p className="error">{error}</p>}
                    <form onSubmit={handleSubmit} >
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
                        <p>Vous n'avez pas de compte ? <Link to="/register" className='anim_undercase'>S'inscrire</Link></p>
                        <p>Mot de passe oublié ? <Link to="/forgotPassword" className='anim_undercase'>Cliquez-ici.</Link></p>
                        {message && <p className="message">{message}</p>}
                        <button type="submit" className='anim_undercase'>Connexion</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
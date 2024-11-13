import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './styles/style1.css';
import './styles/account.css';
import './styles/quizz.css';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import Content from './pages/content';
import QuizzSelect from './pages/quizzSelect';
import QuizzQuestion from './pages/quizzProgress';
import Quizz from '../quizz.json';
import QuizzResult from './pages/quizzResult';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <Home handleLogout={handleLogout} />
                } />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/" replace /> : <Login handleLogin={handleLogin} />} />
                <Route path="/register" element={isAuthenticated ? <Navigate to="/" replace /> : <Register handleLogin={handleLogin} />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/content" element={<Content />} />
                <Route path="/quizzSelect" element={<QuizzSelect datas={Quizz} />} />
                <Route path="/quizzProgress/:idLevel/:idQuizz" element={<QuizzQuestion datas={Quizz} />} />
                <Route path="/quizzResult" element={<QuizzResult />} />

            </Routes>
        </Router>
    );
};

export default App;

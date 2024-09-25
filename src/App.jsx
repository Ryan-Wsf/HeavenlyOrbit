import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/style1.css';
import './styles/account.css';
import './styles/quizz.css';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword';
import Content from './pages/content';
import QuizzSelect from './pages/quizzSelect';
import Quizz from '../quizz.json';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/content" element={<Content />} />
                <Route path="/quizzSelect" element={<QuizzSelect datas={Quizz} />} />
            </Routes>
        </Router>
    );
}

export default App;
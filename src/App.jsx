import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/style1.css';
import './styles/account.css';
import Home from './pages/home';
import Register from './pages/register';
import Login from './pages/login';
import ForgotPassword from './pages/forgotPasseword';
import Content from './pages/content';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
                <Route path="/content" element={<Content />} />
            </Routes>
        </Router>
    );
}

export default App;
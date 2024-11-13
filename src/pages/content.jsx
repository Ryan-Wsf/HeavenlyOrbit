import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import HeroSection from '../components/heroSection';

const Content = () => {
    return (
        <div className="content">
            <Header />
            <HeroSection />
            <main>
                
            </main>
            <Footer />
        </div>
    )
}

export default Content;
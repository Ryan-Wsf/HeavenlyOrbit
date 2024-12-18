import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import InfiniteCarousel from '../components/InfiniteCarousel';
import Destinations from '../../destinations.json';
import HeroSection from '../components/heroSection';

const Home = ({ handleLogout }) => {
    return (
        <div className='home'>
            <div className='background_image_container'>
                <div className='div_background_image'>
                    <img className='background_image' src='/img/background_galaxie.jpeg' alt='background' />
                    <Header handleLogout={handleLogout} />
                    <HeroSection />
                </div>
            </div>
            <main>
                <InfiniteCarousel datas={Destinations} />
                <section id="section3">
                    <div className="max_width1440">
                        <h2>Testez vos connaissances</h2>
                        <p>Plongez-vous dans l'univers fascinant de l'astronomie et mettez vos connaissances à l'épreuve ! Que vous soyez un explorateur débutant ou un expert aguerri passionné par les mystères de l'espace, notre quiz est conçu pour tous les niveaux. Sélectionnez votre niveau de compétence et découvrez si vous pouvez relever les défis cosmiques. Bonne chance, et que les étoiles vous guident !</p>
                        <Link to="/quizzSelect" className="anim_undercase">Accédez au Quizz</Link>
                    </div>
                </section>
                <section id="section4">
                    <div className="max_width1440">
                        <div></div>
                        <article>
                            <h2>A Propos de HeaveanlyOrbit</h2>
                            <p>HeavenlyOrbit est un projet passionnant dédié à l'exploration et à la découverte de l'univers. Nous avons pour mission de fournir des informations détaillées et fascinantes sur les étoiles, les galaxies, les nébuleuses et bien plus encore. Notre objectif est de rendre l'astronomie accessible à tous, tout en offrant une expérience immersive et éducative</p>
                            <Link to="#" className="anim_undercase">En savoir plus</Link>
                        </article>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const ChooseDestination = () => {
    return (
        <section id="section2" className="max_width1440">
            <h2>Explorez l'Univers : Choisissez une Destination</h2>
            <div id="div_section2">
                <Link to="#">
                    <article className="a_galaxies_section2">
                        <h3>Galaxies</h3>
                    </article>
                </Link>
                <Link to="#">
                    <article className="a_planetes_section2">
                        <h3>Planètes</h3>
                    </article>
                </Link>
                <Link to="#">
                    <article className="a_etoiles_section2">
                        <h3>Etoiles</h3>
                    </article>
                </Link>
            </div>
        </section>
    )
}

export default ChooseDestination;
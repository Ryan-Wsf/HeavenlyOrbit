import React from 'react';
import { Link } from 'react-router-dom';

const AdditionalContent = () => {
    return (
        <section className="sectionAddContent max_width1440">
            <h2>Les types de galaxies</h2>
            <div className="div_additional_content">
                <article>
                    <img src="/img/Galaxies.jpg" alt="galaxie" />
                    <div>
                        <h3>Les galaxies spirales</h3>
                        <p>Ces galaxies, comme notre Voie Lactée, possèdent des bras en spirale qui s'étendent à partir d'un noyau central lumineux. Elles contiennent des étoiles jeunes et anciennes, ainsi que des quantités significatives de gaz et de poussières.</p>
                        <button className='button_content'>En savoir plus</button>
                    </div>
                </article>
                <article>
                    <img src="/img/Galaxie-Elliptique.jpg" alt="galaxie" />
                    <div>
                        <h3>Galaxies elliptiques</h3>
                        <p>De forme ovale, ces galaxies contiennent principalement des étoiles anciennes et peu de gaz et de poussières. Elles ont une structure plus homogène et sont souvent le résultat de fusions entre galaxies.</p>
                        <button className='button_content'>En savoir plus</button>
                    </div>
                </article>
                <article>
                    <img src="/img/Galaxie-irréguliere.jpg" alt="galaxie" />
                    <div>
                        <h3>Galaxies irrégulières</h3>
                        <p>Ces galaxies n'ont pas de forme définie et sont souvent le résultat de perturbations gravitationnelles ou de collisions avec d'autres galaxies. Elles contiennent un mélange d'étoiles jeunes et anciennes, ainsi que des quantités variables de gaz et de poussières.</p>
                        <button className='button_content'>En savoir plus</button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default AdditionalContent;
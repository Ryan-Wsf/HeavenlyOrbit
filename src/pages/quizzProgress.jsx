import React from "react";
import Header from "../components/header";
import { useParams } from "react-router-dom";

const Quizz = ({ datas }) => {
    const { idLevel, idQuizz } = useParams();
    // Rechercher l'élément dans le datas qui possède l'id
    const level = datas.find(element => element.id === parseInt(idLevel));
    const element = level.numberQuizz.find(element => element.id === parseInt(idQuizz));

    return (
        <div className="quizzPage">
            <div className="div_background_image">
                <Header />
                <main className="max_width1440">
                    <h1 className="h1_quizzProgress">{element.name} {level.name} {element.number}</h1>
                    <p className="quizz_question">Quel est la distance entre la Terre et la Lune ?</p>
                    <div className="quizz_response">
                        <p>La distance entre la Terre et la Lune est de 384,400 km.</p>
                        <p>La distance entre la Terre et la Lune est de 244,000 km.</p>
                        <p>La distance entre la Terre et la Lune est de 149,600 km.</p>
                        <p>La distance entre la Terre et la Lune est de 114,000 km.</p>
                    </div>
                    <div className="next_question">
                        <button className="button-white">Continuer</button>
                        <p className="quizz_progress">1/10</p>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Quizz;
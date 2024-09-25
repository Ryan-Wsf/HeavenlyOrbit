import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';

const QuizzSelect = ({ datas }) => {
    const [selectedLevel, setSelectedLevel] = useState(null);  // Niveau sélectionné
    const [selectedQuizz, setSelectedQuizz] = useState(null);  // Quizz sélectionné
    const navigate = useNavigate();

    // Fonction appelée quand l'utilisateur clique sur "Commencez le quizz"
    const handleStartQuizz = () => {
        if (selectedQuizz) {
            navigate(`/quizz/${selectedQuizz.id}`);
        } else {
            alert("Veuillez sélectionner un quizz.");
        }
    };

    // Messages explicites pour chaque niveau
    const levelMessages = {
        "Débutant": "Vous avez sélectionné le niveau Débutant, parfait pour commencer !",
        "Intermédiaire": "Vous avez sélectionné le niveau Intermédiaire, prêt pour un challenge ?",
        "Avancé": "Vous avez sélectionné le niveau Avancé, bon courage pour le quizz difficile !"
    };

    return (
        <div className="quizzPage">
            <div className="div_background_image">
                <Header />
                <main className="max_width1440">
                    <h1>Quizz</h1>
                    <p className='p_title1'>Sélectionnez votre niveau de compétence</p>
                    
                    {/* Sélection du niveau */}
                    <div className='level_select'>
                        {datas.map((item) => (
                            <button
                                className={`not-active-level button-white ${selectedLevel?.name === item.name ? 'active-level' : ''}`}  // Ajouter une classe si le niveau est sélectionné
                                key={item.id}
                                onClick={() => {
                                    setSelectedLevel(item);
                                    setSelectedQuizz(null);  // Réinitialiser le quizz sélectionné
                                }}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>

                    {/* Message explicite basé sur le niveau sélectionné */}
                    {selectedLevel && (
                        <p className='level_message'>
                            {levelMessages[selectedLevel.name]}
                        </p>
                    )}

                    {/* Affichage des quizz correspondant au niveau sélectionné */}
                    {selectedLevel && (
                        <div className='numberQuizz'>
                            {selectedLevel.numberQuizz.map((quiz) => (
                                <button
                                    className={`${selectedQuizz?.id === quiz.id ? 'active-quizz' : ''}`}  // Ajouter une classe si le quizz est sélectionné
                                    key={quiz.id}
                                    onClick={() => setSelectedQuizz(quiz)}  // Sélectionner le quizz
                                >
                                    <span>{quiz.name}</span>
                                    <span>{quiz.number}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    <div className='start_quizz'>
                        <button
                            type="button"
                            className='button-white'
                            onClick={handleStartQuizz}  // Démarrer le quizz
                        >
                            Commencer le quizz
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default QuizzSelect;

import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/header';
import { getQuizzesLevel, getQuizzesByDifficulty } from '../api/bookApi';
import useAuthStore from '../store/authStore';

// Composant qui affiche la page de sélection de quizz
const QuizzSelect = () => {
    const [errorMessage, setErrorMessage] = useState("");
    const [difficultyLevels, setDifficultyLevels] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [quizzes, setQuizzes] = useState([]);
    const [selectedQuizz, setSelectedQuizz] = useState(null);
    const [base, setBase] = useState("Veuillez sélectionner un niveau de difficulté");
    const navigate = useNavigate();
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);

    // Effect qui récupère les niveaux de difficulté
    useEffect(() => {
        if (isAuthenticated) {
            const fetchDifficultyLevels = async () => {
                try {
                    const data = await getQuizzesLevel();
                    if (data && data.difficultyQuiz) {
                        setDifficultyLevels(data.difficultyQuiz);
                    }
                } catch (error) {
                    console.error('Failed to fetch difficulty levels', error);
                }
            };
            fetchDifficultyLevels();
        }
    }, [isAuthenticated]);
    // Effect qui récupère les quizzes d'un niveau
    useEffect(() => {
        const fetchQuizzes = async () => {
            if (selectedLevel) {
                try {
                    const data = await getQuizzesByDifficulty(selectedLevel.id);
                    if (data && data.quizz) {
                        setQuizzes(data.quizz);
                    }
                } catch (error) {
                    console.error('Failed to fetch quizzes', error);
                }
            }
        };
        fetchQuizzes();
    }, [selectedLevel]);

    // Si l'utilisateur est authentifié et qu'il a sélectionné un quizz, on redirige vers la page de progression
    const handleStartQuizz = () => {
        if (!selectedLevel) {
            setErrorMessage("Veuillez sélectionner un niveau de difficulté.");
            setTimeout(() => setErrorMessage(""), 5000); 
            return;
        }
        if (!selectedQuizz) {
            setErrorMessage("Veuillez sélectionner un quizz.");
            setTimeout(() => setErrorMessage(""), 5000);
            return;
        }
        navigate(`/quizzProgress/${selectedLevel.id}/${selectedQuizz.id}`);
    };
    
    // Si l'utilisateur n'est pas authentifié, on affiche un message d'erreur
    if (!isAuthenticated) {
        return (
            <div className="quizzPage">
                <div className="div_background_image">
                    <Header />
                    <main className="max_width1440">
                        <div className="access-denied">
                            <h1 className='title_refused_access'>Accès refusé</h1>
                            <p className='p_refused_acces'>Pour accéder aux quiz et tester vos connaissances sur l'astronomie, vous devez avoir un compte et être connecté.</p>
                            <div className='auth-buttons'>
                                <Link to="/login" className='anim_undercase'>Se connecter</Link>
                                <p>/</p>
                                <Link to="/register" className='anim_undercase'>S'inscrire</Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
    // Reste du code pour les utilisateurs authentifiés : affichage de la page de progression
    return (
        <div className="quizzPage">
            <div className="div_background_image">
                <Header />
                <main className="max_width1440">
                    <h1>Quizz</h1>
                    {errorMessage && (
                        <div className="error-message">
                            {errorMessage}
                        </div>
                    )}
                    <p className='p_title1'>{base}</p>
                    <div className='level_select'>
                        {/* boucle qui affiche les niveaux de difficulté sélectionnables */}
                        {difficultyLevels.map((level) => (
                            <button
                                className={`not-active-level button-white ${selectedLevel?.id === level.id ? 'active-level' : ''}`}
                                key={level.id}
                                onClick={() => {
                                    setSelectedLevel(level);
                                    setSelectedQuizz(null);
                                    setBase(`Vous avez sélectionné le niveau ${level.name_difficulty_quiz}`);
                                }}
                            >
                                {level.name_difficulty_quiz}
                            </button>
                        ))}
                    </div>

                    {selectedLevel && (
                        <div className='numberQuizz'>
                            {/* boucle qui affiche les quizzs sélectionnables */}
                            {quizzes.map((quiz) => (
                                <button
                                    className={`${selectedQuizz?.id === quiz.id ? 'active-quizz' : ''}`}
                                    key={quiz.id}
                                    onClick={() => setSelectedQuizz(quiz)}
                                >
                                    <span>{quiz.title_quizz}</span>
                                </button>
                            ))}
                        </div>
                    )}
                    {/* bouton de départ du quizz */}
                    <div className='start_quizz'>
                        <button
                            type="button"
                            className='button-white'
                            onClick={handleStartQuizz}
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
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/header';
import { getQuizzesLevel, getQuizzesByDifficulty } from '../api/bookApi';

const QuizzSelect = () => {
    const [difficultyLevels, setDifficultyLevels] = useState([]);
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [quizzes, setQuizzes] = useState([]);
    const [selectedQuizz, setSelectedQuizz] = useState(null);
    const [base, setBase] = useState("Veuillez sélectionner un niveau de difficulté");
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('token');

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

    const handleStartQuizz = () => {
        if (selectedQuizz) {
            navigate(`/quizzProgress/${selectedLevel.id}/${selectedQuizz.id}`);
        } else {
            alert("Veuillez sélectionner un quizz.");
        }
    };

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
                                <Link to="/login" className='button-white'>Se connecter</Link>
                                <p>Pas encore de compte ?</p>
                                <Link to="/register" className='button-white'>S'inscrire</Link>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        );
    }

    // Reste du code pour les utilisateurs authentifiés...
    return (
        <div className="quizzPage">
            <div className="div_background_image">
                <Header />
                <main className="max_width1440">
                    <h1>Quizz</h1>
                    <p className='p_title1'>{base}</p>
                    
                    <div className='level_select'>
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

                    <div className='start_quizz'>
                        <button
                            type="button"
                            className='button-white'
                            onClick={handleStartQuizz}
                            disabled={!selectedQuizz}
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
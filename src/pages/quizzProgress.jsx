import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/header';
import { getQuizQuestions } from '../api/bookApi';

// Composant qui affiche la page de progression d'un quizz
const QuizzProgress = () => {
    const { idQuizz } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Effect qui récupère les questions d'un quizz
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const data = await getQuizQuestions(idQuizz);
                setQuestions(data.questions); 
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch questions:', error);
                setLoading(false);
            }
        };

        fetchQuestions();
    }, [idQuizz]);

    // Gère la progression du quiz et la navigation vers les résultats
    const handleNextQuestion = () => {
        if (selectedAnswer !== null) {
            // Crée un objet avec les informations de la réponse actuelle
            const newAnswer = {
                questionId: questions[currentQuestionIndex].id,
                questionText: questions[currentQuestionIndex].question,
                selectedAnswerId: selectedAnswer,
                selectedAnswerText: questions[currentQuestionIndex].Answers.find(a => a.id === selectedAnswer)?.text_answer || 'Réponse inconnue',
                correctAnswerText: questions[currentQuestionIndex].Answers.find(answer => answer.is_correct_answer === true).text_answer,
                isCorrect: selectedAnswer === questions[currentQuestionIndex].Answers.find(answer => answer.is_correct_answer === true).id
            };

            // Met à jour le tableau des réponses et le compteur de réponses correctes
            const updatedAnswers = [...userAnswers, newAnswer];
            setUserAnswers(updatedAnswers);
            if (newAnswer.isCorrect) {
                setCorrectAnswersCount(prevCount => prevCount + 1);
            }

            // Vérifie si c'est la dernière question pour naviguer vers les résultats
            if (currentQuestionIndex === questions.length - 1) {
                navigate('/quizzResult', {
                    state: { 
                        userAnswers: updatedAnswers,
                        correctAnswersCount: correctAnswersCount + (newAnswer.isCorrect ? 1 : 0),
                        questions
                    } 
                });
            } else {
                // Passe à la question suivante si ce n'est pas la dernière
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswer(null);
            }
        } else {
            alert("Veuillez sélectionner une réponse.");
        }
    };

    if (loading) {
        return <div>Chargement...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="quizzPage">
            <div className="div_background_image">
                <Header />
                <main className="max_width1440">
                    <h1 className="h1_quizzProgress">Quizz #{idQuizz}</h1>
                    <p className="quizz_question">{currentQuestion.question}</p>
                    <div className='response_quizz'>
                        {currentQuestion.Answers && currentQuestion.Answers.map((answer) => (
                            <button
                                className={`${selectedAnswer === answer.id ? 'active-quizz' : ''}`}
                                key={answer.id}
                                onClick={() => setSelectedAnswer(answer.id)}
                            >
                                {answer.text_answer}
                            </button>
                        ))}
                    </div>
                    <div className="next_question">
                        <button
                            className="button-white"
                            onClick={handleNextQuestion}
                        >
                            Continuer
                        </button>
                        <p className="quizz_progress">{currentQuestionIndex + 1}/{questions.length}</p>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default QuizzProgress;
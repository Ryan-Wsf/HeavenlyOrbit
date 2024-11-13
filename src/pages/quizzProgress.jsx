import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/header';
import { getQuizQuestions } from '../api/bookApi';

const QuizzProgress = () => {
    const { idQuizz } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [userAnswers, setUserAnswers] = useState([]);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

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

    const handleNextQuestion = () => {
        if (selectedAnswer !== null) {
            handleAnswer(questions[currentQuestionIndex].id, selectedAnswer);
    
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswer(null);
            } else {
    
                navigate('/quizzResult', {
                    state: { 
                        userAnswers, 
                        correctAnswersCount,
                        questions
                    } 
                });
            }
        } else {
            alert("Veuillez sélectionner une réponse.");
        }
    };
    

    if (loading) {
        return <div>Chargement...</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswer = (questionId, selectedAnswerId) => {
        const currentQuestion = questions.find(q => q.id === questionId);
        const correctAnswer = currentQuestion.Answers.find(answer => answer.is_correct_answer === true);
        
        setUserAnswers(prevAnswers => [
            ...prevAnswers,
            {
                questionId,
                questionText: currentQuestion.question, // Ajoute le texte de la question
                selectedAnswerId,
                selectedAnswerText: currentQuestion.Answers.find(a => a.id === selectedAnswerId)?.text_answer || 'Réponse inconnue',
                correctAnswerText: correctAnswer.text_answer, // Ajoute le texte de la bonne réponse
                isCorrect: selectedAnswerId === correctAnswer.id
            }
        ]);
    
        // Mettre à jour le compteur de réponses correctes
        if (selectedAnswerId === correctAnswer.id) {
            setCorrectAnswersCount(prevCount => prevCount + 1);
        }
    };

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

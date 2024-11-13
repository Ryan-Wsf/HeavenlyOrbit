import React from 'react';
import { Check, X} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const QuizzResult = () => {
    const location = useLocation();
    const { userAnswers, correctAnswersCount, questions } = location.state || {};
    const navigate = useNavigate();

    if (!userAnswers || !questions) {
        return <div>Aucun résultat disponible.</div>;
    }

    const handleSubmit = () => {
        navigate('/quizzSelect');
    };

    return (
        <div className='quizzPage'>
            <div className="quizzResult">
                <div className="div_background_image">
                    <Header />
                    <h1>Résultats du Quizz</h1>
                    <p>Vous avez obtenu {correctAnswersCount} réponses correctes.</p>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="#"
                    >
                        {userAnswers?.map(answer => (
                            <SwiperSlide key={answer.questionId}>
                                <div className='question-card'>
                                    <p>Question: {answer.questionText}</p>
                                    <p>
                                        Votre réponse : {answer.selectedAnswerText}
                                        {answer.isCorrect ? 
                                            <Check size={24} color='green' className='icon_response' /> : 
                                            <X size={24} color='red' className='icon_response' />
                                        }
                                    </p>
                                    {!answer.isCorrect && 
                                        <p>La bonne réponse était : {answer.correctAnswerText}</p>
                                    }
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='start_quizz'>
                        <button 
                            onClick={handleSubmit}
                            className='button-white'
                        >
                            Retourner au Quizz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizzResult;

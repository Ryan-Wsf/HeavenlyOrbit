const API_URL = 'https://heavenly-orbit-back.vercel.app';
const API_URL_DEV = 'http://localhost:6543';

const handleResponse = async (response) => {
    const contentType = response.headers.get('Content-Type');
    
    if (!response.ok) {
      let errorMessage = 'Une erreur est survenue';
      
      if (contentType && contentType.includes('application/json')) {
        const error = await response.json();
        errorMessage = error.message || errorMessage;
      } else {
        errorMessage = `Erreur ${response.status}: ${response.statusText}`;
      }
      
      throw new Error(errorMessage);
    }
  
    return contentType && contentType.includes('application/json') 
      ? response.json() 
      : null;
  };
  
  
  const getAuthHeaders = () => {
    const token = localStorage.getItem('token');
    return {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : '',
    };
  };


  // Register
export const register = async (userData) => {
    const response = await fetch(`${API_URL_DEV}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return handleResponse(response);
};

  // Login
export const login = async (credentials) => {
  const response = await fetch(`${API_URL_DEV}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return handleResponse(response);
};

// Quizzes
export const getQuizzes = async (id) => {
  const response = await fetch(`${API_URL_DEV}/quizzes/getAllQuizzes/${id}`, {headers: getAuthHeaders()}) ;
  return handleResponse(response);
}

// Quizz
export const getQuiz = async (id) => {
  const response = await fetch(`${API_URL_DEV}/quizzes/${id}`, {headers: getAuthHeaders()}) ;
  return handleResponse(response);
}

// Quizz Questions
export const getQuizQuestions = async (id) => {
  const response = await fetch(`${API_URL_DEV}/questions/getAllQuestions/${id}`, {headers: getAuthHeaders()}) ;
  return handleResponse(response);
}

// Quizz Question
export const getQuizQuestion = async (id) => {
  const response = await fetch(`${API_URL_DEV}/questions/getQuestion/${id}`, {headers: getAuthHeaders()}) ;
  return handleResponse(response);
}

// Quizzes level
export const getQuizzesLevel = async () => {
  console.log('Sending request to:', `${API_URL_DEV}/difficultyQuiz/getAllDifficultyQuiz`);
  const response = await fetch(`${API_URL_DEV}/difficultyQuiz/getAllDifficultyQuiz`, {headers: getAuthHeaders()});
  console.log('Response received:', response);
  return handleResponse(response);
}

// Quizz level
export const getQuizLevel = async (id) => {
  const response = await fetch(`${API_URL_DEV}/difficultyQuiz/getDifficultyQuiz/${id}`, {headers: getAuthHeaders()}) ;
  return handleResponse(response);
}

// Quizz by Difficulty
export const getQuizzesByDifficulty = async (difficultyId) => {
  console.log('Fetching quizzes for difficulty:', difficultyId);
  const response = await fetch(`${API_URL_DEV}/quizzes/getQuizByDifficulty/${difficultyId}`, {headers: getAuthHeaders()});
  console.log('Response received:', response);
  return handleResponse(response);
}

// Forgot Password
export const forgotPassword = async (email) => {
  const response = await fetch(`${API_URL_DEV}/forgotPassword/send-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  return handleResponse(response);
};







const API_URL = 'https://heavenly-orbit-back.vercel.app';

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
    const response = await fetch(`${API_URL}/auth/register`, {
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
  const response = await fetch(`${API_URL}/auth/login`, {
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
  const response = await fetch(`${API_URL}/quizzes/getAllQuizzes/${id}`, {headers: getAuthHeaders()}) ;
  return handleResponse(response);
}

// Quizz
export const getQuiz = async (id) => {
  const response = await fetch(`${API_URL}/quizzes/${id}`, {headers: getAuthHeaders()}) ;
  return handleResponse(response);
}

// Quizz Questions
export const getQuizQuestions = async (id) => {
  const response = await fetch(`${API_URL}/questions/getAllQuestions/${id}`, {headers: getAuthHeaders()}) ;
  return handleResponse(response);
}

// Quizz Question
export const getQuizQuestion = async (id) => {
  const response = await fetch(`${API_URL}/questions/getQuestion/${id}`, {headers: getAuthHeaders()}) ;
  return handleResponse(response);
}

// Quizzes level
export const getQuizzesLevel = async () => {
  console.log('Sending request to:', `${API_URL}/difficultyQuiz/getAllDifficultyQuiz`);
  const response = await fetch(`${API_URL}/difficultyQuiz/getAllDifficultyQuiz`, {headers: getAuthHeaders()});
  console.log('Response received:', response);
  return handleResponse(response);
}

// Quizz level
export const getQuizLevel = async (id) => {
  const response = await fetch(`${API_URL}/difficultyQuiz/getDifficultyQuiz/${id}`, {headers: getAuthHeaders()}) ;
  return handleResponse(response);
}

// Quizz by Difficulty
export const getQuizzesByDifficulty = async (difficultyId) => {
  console.log('Fetching quizzes for difficulty:', difficultyId);
  const response = await fetch(`${API_URL}/quizzes/getQuizByDifficulty/${difficultyId}`, {headers: getAuthHeaders()});
  console.log('Response received:', response);
  return handleResponse(response);
}








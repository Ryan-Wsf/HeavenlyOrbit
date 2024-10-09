const API_URL = 'http://localhost:3000';

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
  
  
  // const getAuthHeaders = () => {
  //   const token = localStorage.getItem('token');
  //   return {
  //     'Content-Type': 'application/json',
  //     'Authorization': token ? `Bearer ${token}` : '',
  //   };
  // };


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
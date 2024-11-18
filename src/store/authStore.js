import { create } from 'zustand';

// Store pour gérer l'authentification
const useAuthStore = create((set) => ({
    // Si l'utilisateur est authentifié, on stocke son token dans le localStorage sinon on stocke null
    isAuthenticated: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    // Fonction pour se connecter
    login: (token) => {
        localStorage.setItem('token', token);
        set({ isAuthenticated: true, token });
    },
    // Fonction pour se déconnecter
    logout: () => {
        localStorage.removeItem('token');
        set({ isAuthenticated: false, token: null });
    }
}));

export default useAuthStore;
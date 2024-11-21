import { create } from 'zustand';

const useAuthStore = create((set) => ({
    isAuthenticated: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    
    login: (token) => {
        localStorage.setItem('token', token);
        set({ isAuthenticated: true, token });
    },
    
    logout: () => {
        localStorage.removeItem('token');
        set({ isAuthenticated: false, token: null });
    },

    register: (token) => {
        localStorage.setItem('token', token);
        set({ isAuthenticated: true, token });
    }
}));

export default useAuthStore;
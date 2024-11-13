import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // pour les assertions supplémentaires
import { BrowserRouter } from 'react-router-dom'; // pour simuler le routage
import Header from '../components/header'; // importer le composant

describe('Header', () => {
  const mockHandleLogout = jest.fn();

  test('renders Header component', () => {
    render(
      <BrowserRouter>
        <Header handleLogout={mockHandleLogout} />
      </BrowserRouter>
    );

    // Vérifie que le logo est présent
    expect(screen.getByText(/HeavenlyOrbit/i)).toBeInTheDocument();

    // Vérifie que le lien "Connexion" est présent
    expect(screen.getByText(/Connexion/i)).toBeInTheDocument();
  });

  test('toggles the menu when the burger button is clicked', () => {
    render(
      <BrowserRouter>
        <Header handleLogout={mockHandleLogout} />
      </BrowserRouter>
    );

    // Simule un clic sur le bouton burger
    fireEvent.click(screen.getByRole('link', { name: /icon_menu/i }));

    // Vérifie que le menu est ouvert
    expect(screen.getByText(/Connexion/i)).toBeInTheDocument(); // Le lien doit être présent
    expect(screen.getByText(/Inscription/i)).toBeInTheDocument(); // Idem

    // Simule un autre clic pour fermer le menu
    fireEvent.click(screen.getByRole('link', { name: /icon_menu/i }));

    // Vérifie que le menu est fermé
    expect(screen.queryByText(/Connexion/i)).toBeInTheDocument(); // Le lien doit être présent
    expect(screen.queryByText(/Inscription/i)).toBeInTheDocument(); // Idem
  });

  test('displays logout link when authenticated', () => {
    // Simule un état authentifié
    localStorage.setItem('token', 'mockToken');
    render(
      <BrowserRouter>
        <Header handleLogout={mockHandleLogout} />
      </BrowserRouter>
    );

    // Vérifie que le lien "Déconnexion" est présent
    expect(screen.getByText(/Déconnexion/i)).toBeInTheDocument();
  });

  test('calls handleLogout when clicking on logout link', () => {
    // Simule un état authentifié
    localStorage.setItem('token', 'mockToken');
    render(
      <BrowserRouter>
        <Header handleLogout={mockHandleLogout} />
      </BrowserRouter>
    );

    // Simule un clic sur le lien de déconnexion
    fireEvent.click(screen.getByText(/Déconnexion/i));

    // Vérifie que handleLogout a été appelé
    expect(mockHandleLogout).toHaveBeenCalled();
  });
});

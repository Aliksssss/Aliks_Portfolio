import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '@/app/components/ContactForm';
import emailjs from '@emailjs/browser';

// Mock EmailJS
jest.mock('@emailjs/browser', () => ({
  init: jest.fn(),
  send: jest.fn(() => Promise.resolve({ status: 200, text: 'OK' })),
}));

// Mock les constantes EmailJS
jest.mock('@/constants/emailjs', () => ({
  EMAILJS_CONFIG: {
    SERVICE_ID: 'test-service-id',
    TEMPLATE_ID: 'test-template-id',
    PUBLIC_KEY: 'test-public-key',
  },
}));

describe('ContactForm Component', () => {
  beforeEach(() => {
    // Réinitialiser les mocks avant chaque test
    jest.clearAllMocks();
  });

  it('renders the form correctly', () => {
    render(<ContactForm />);
    
    // Vérifier que les champs du formulaire sont présents
    expect(screen.getByPlaceholderText('Votre nom')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Votre email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Votre message')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /envoyer/i })).toBeInTheDocument();
  });

  it('updates form data when user types', () => {
    render(<ContactForm />);
    
    // Simuler la saisie dans les champs
    const nameInput = screen.getByPlaceholderText('Votre nom');
    const emailInput = screen.getByPlaceholderText('Votre email');
    const messageInput = screen.getByPlaceholderText('Votre message');
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    
    // Vérifier que les valeurs ont été mises à jour
    expect(nameInput).toHaveValue('Test User');
    expect(emailInput).toHaveValue('test@example.com');
    expect(messageInput).toHaveValue('Test message');
  });

  it('shows validation errors for empty fields on submit', async () => {
    render(<ContactForm />);
    
    // Soumettre le formulaire sans remplir les champs
    const submitButton = screen.getByRole('button', { name: /envoyer/i });
    fireEvent.click(submitButton);
    
    // Vérifier que les messages d'erreur sont affichés
    await waitFor(() => {
      expect(screen.getByText(/veuillez entrer votre nom/i)).toBeInTheDocument();
      expect(screen.getByText(/veuillez entrer votre email/i)).toBeInTheDocument();
      expect(screen.getByText(/veuillez entrer votre message/i)).toBeInTheDocument();
    });
    
    // Vérifier que emailjs.send n'a pas été appelé
    expect(emailjs.send).not.toHaveBeenCalled();
  });

  it('shows validation error for invalid email', async () => {
    render(<ContactForm />);
    
    // Remplir les champs avec un email invalide
    const nameInput = screen.getByPlaceholderText('Votre nom');
    const emailInput = screen.getByPlaceholderText('Votre email');
    const messageInput = screen.getByPlaceholderText('Votre message');
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    
    // Soumettre le formulaire
    const submitButton = screen.getByRole('button', { name: /envoyer/i });
    fireEvent.click(submitButton);
    
    // Vérifier que le message d'erreur pour l'email est affiché
    await waitFor(() => {
      expect(screen.getByText(/veuillez entrer un email valide/i)).toBeInTheDocument();
    });
    
    // Vérifier que emailjs.send n'a pas été appelé
    expect(emailjs.send).not.toHaveBeenCalled();
  });

  it('submits the form successfully with valid data', async () => {
    render(<ContactForm />);
    
    // Remplir les champs avec des données valides
    const nameInput = screen.getByPlaceholderText('Votre nom');
    const emailInput = screen.getByPlaceholderText('Votre email');
    const messageInput = screen.getByPlaceholderText('Votre message');
    
    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    
    // Soumettre le formulaire
    const submitButton = screen.getByRole('button', { name: /envoyer/i });
    fireEvent.click(submitButton);
    
    // Vérifier que emailjs.send a été appelé avec les bons paramètres
    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledWith(
        'test-service-id',
        'test-template-id',
        expect.objectContaining({
          to_name: 'Aliks',
          name: 'Test User',
          email: 'test@example.com',
          message: 'Test message'
        }),
        'test-public-key'
      );
    });
    
    // Vérifier que le message de succès est affiché
    await waitFor(() => {
      expect(screen.getByText(/message envoyé avec succès/i)).toBeInTheDocument();
    });
  });
});

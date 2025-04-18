import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectCards from '@/app/components/ProjectCards';

// Mock des données de projet pour les tests
const mockProject = {
  title: "Projet Test",
  description: "Description du projet test",
  image: "/test-image.png",
  tags: ["React", "TypeScript", "Tailwind"],
  demo: "https://test-demo.com",
  github: "https://github.com/test/repo"
};

describe('ProjectCards Component', () => {
  it('renders project card correctly', () => {
    render(<ProjectCards project={mockProject} />);
    
    // Vérifier que le titre du projet est affiché
    expect(screen.getByText('Projet Test')).toBeInTheDocument();
    
    // Vérifier que la description est affichée
    expect(screen.getByText('Description du projet test')).toBeInTheDocument();
    
    // Vérifier que les tags sont affichés
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();
    
    // Vérifier que les liens sont présents
    const demoLink = screen.getByText('Voir').closest('a');
    const codeLink = screen.getByText('Code').closest('a');
    
    expect(demoLink).toHaveAttribute('href', 'https://test-demo.com');
    expect(codeLink).toHaveAttribute('href', 'https://github.com/test/repo');
  });
  
  it('handles missing optional properties correctly', () => {
    const projectWithoutLinks = {
      title: "Projet Sans Liens",
      description: "Description du projet sans liens",
      image: "/test-image.png",
      tags: ["React"]
    };
    
    render(<ProjectCards project={projectWithoutLinks} />);
    
    // Vérifier que le titre et la description sont affichés
    expect(screen.getByText('Projet Sans Liens')).toBeInTheDocument();
    expect(screen.getByText('Description du projet sans liens')).toBeInTheDocument();
    
    // Vérifier que le tag est affiché
    expect(screen.getByText('React')).toBeInTheDocument();
    
    // Vérifier que les liens ne sont pas présents
    expect(screen.queryByText('Voir')).not.toBeInTheDocument();
    expect(screen.queryByText('Code')).not.toBeInTheDocument();
  });
  
  it('handles projects with more than 3 tags correctly', () => {
    const projectWithManyTags = {
      title: "Projet Multi-Tags",
      description: "Description du projet avec beaucoup de tags",
      image: "/test-image.png",
      tags: ["React", "TypeScript", "Tailwind", "Next.js", "Jest"]
    };
    
    render(<ProjectCards project={projectWithManyTags} />);
    
    // Vérifier que les 3 premiers tags sont affichés
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();
    
    // Vérifier que le compteur de tags supplémentaires est affiché
    expect(screen.getByText('+2')).toBeInTheDocument();
  });
});

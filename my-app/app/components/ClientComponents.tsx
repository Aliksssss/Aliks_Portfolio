"use client";

import dynamic from 'next/dynamic';

// Import dynamique des composants côté client
const ThemeToggle = dynamic(() => import('./ThemeToggle'), { 
  ssr: false 
});

const AccessibilityMenu = dynamic(() => import('./AccessibilityMenu'), {
  ssr: false
});

export default function ClientComponents() {
  return (
    <>
      <ThemeToggle />
      <AccessibilityMenu />
    </>
  );
}

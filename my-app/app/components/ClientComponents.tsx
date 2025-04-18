"use client";

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Import dynamique des composants côté client
const AccessibilityMenu = dynamic(() => import('./AccessibilityMenu'), {
  ssr: false
});

export default function ClientComponents() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 flex space-x-2">
      <AccessibilityMenu />
    </div>
  );
}

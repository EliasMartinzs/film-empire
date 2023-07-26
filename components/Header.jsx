'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Header() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 h-20 padding-web ${
        theme === 'light' ? 'bg-[#fff]' : 'bg-[#171717]'
      }`}
    >
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

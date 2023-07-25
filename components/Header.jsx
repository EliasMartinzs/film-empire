'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Header() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

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

'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header
      className={`fixed top-0 w-full z-50 h-20 padding-web ${
        theme === 'dark' ? 'bg-[#171717]' : 'bg-[#fff]'
      } `}
    >
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

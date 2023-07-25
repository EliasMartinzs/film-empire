'use client';
import { useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`fixed top-0 w-full z-50 h-20 padding-web`}>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

export default function SetTheme() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div>
      {currentTheme === 'dark' ? (
        <BsFillSunFill
          className="title cursor-pointer"
          onClick={() => setTheme('light')}
        />
      ) : (
        <BsFillMoonStarsFill
          className="title cursor-pointer"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  );
}

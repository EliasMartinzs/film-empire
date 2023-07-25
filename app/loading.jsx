'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Loading() {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Image
        src={`${theme === 'dark' ? '/loading-light.svg' : '/loading-dark.svg'}`}
        width={50}
        height={50}
        alt="loadings"
      />
    </div>
  );
}

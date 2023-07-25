import { useTheme } from 'next-themes';

import { genders } from '@/constans';
import Link from 'next/link';
import Search from './Search';

export default function Sidebar({ isOpen, setIsOpen }) {
  const { theme } = useTheme();

  return (
    <aside
      className={`absolute top-20 ${
        isOpen ? 'left-0' : '-left-full'
      } w-56 lg:w-80 h-screen transition-all ${
        theme === 'dark' ? 'bg-[#171717]' : 'bg-[#ffffff]'
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex-start px-5 lg:px-10 flex-col">
        <div className="flex-start lg:hidden">
          <Search lgHidden="hidden" />
        </div>
        <h3 className="title font-bold mt-2">Genders</h3>
        <ul className="mt-2 w-full">
          {genders.map(gender => (
            <li
              key={gender.name}
              className={`w-full flex-start flex-col font-extralight py-1 hover:rounded-r-full px-2 ${
                theme === 'dark' ? 'hover:bg-zinc-800' : 'hover:bg-slate-300'
              }  `}
            >
              <Link
                className="hover:w-full small"
                href={`/genders/${gender.id}`}
              >
                {gender.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

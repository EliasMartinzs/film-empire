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
        theme === 'dark' ? 'bg-[#0e0e0e]' : 'bg-[#cccccc]'
      }`}
    >
      <div className="flex-start px-5 lg:px-10 flex-col py-10">
        <div className="flex-start mb-10 lg:hidden">
          <Search lgHidden="hidden" />
        </div>
        <h3 className="title font-bold">Genders</h3>
        <ul className="mt-5 flex flex-col gap-y-2 font-extralight">
          {genders.map(gender => (
            <li key={gender.name}>
              <Link className="hover:underline" href={`/${gender.id}`}>
                {gender.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

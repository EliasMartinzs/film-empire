import Link from 'next/link';
import Search from './Search';
import SetTheme from './SetTheme';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Navbar({ isOpen, setIsOpen }) {
  return (
    <nav className="w-full h-full flex-between">
      <Link href="/" className="title-big font-black">
        Film <span className="text-red-500">E</span>mpire
      </Link>
      <div className="flex-center gap-x-5">
        <Search width="96" hidden="hidden" lgHidden="block" />

        {isOpen ? (
          <AiOutlineClose
            className="title cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <AiOutlineMenu
            className="title cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <SetTheme />
      </div>
    </nav>
  );
}

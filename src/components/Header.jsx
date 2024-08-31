import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';

export default function Header() {
    const sections = [
        'Skills',
        'Experience',
        'Projects',
        'Profiles',
        'Contact',
    ];

    const isDarkMode = useSelector(state => state.data.toggle);
    console.log(isDarkMode ? 'Dark' : 'Light');

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(prevState => !prevState);
    }, []);

    return (
        <header className="w-full top-0 sticky flex flex-row p-4 text-white font-sans z-[90]">
            <h1 className="text-gray-700 dark:text-white flex w-full basis-1/2 text-2xl font-bold text-justify">
                Niraj Sai
            </h1>
            <nav className="hidden md:flex w-[80%] basis-1/2 flex-row justify-around text-md font-semibold">
                {sections.map(section => (
                    <div
                        className="dark:text-white text-gray-700 hover:underline hover:text-green-400 hover:text-xl"
                        key={section}
                    >
                        <Link 
                            activeClass='active' 
                            to={section} 
                            spy={true} 
                            smooth={true} 
                            offset={-100} 
                            duration={500}
                        >
                            {section}
                        </Link>
                    </div>
                ))}
            </nav>
            <button 
                className='flex w-full justify-end md:hidden' 
                onClick={toggleMenu}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
                {isOpen ? <X /> : <Menu />}
            </button>
            {isOpen && (
                <nav className='flex flex-col items-end justify-end md:hidden'>
                    {sections.map(section => (
                        <div
                            className="dark:text-white text-gray-700 hover:underline-offset-4 hover:text-green-400 hover:text-xl"
                            key={section}
                        >
                            <NavLink to={`/${section}`}>
                                {section}
                            </NavLink>
                        </div>
                    ))}
                </nav>
            )}
        </header>
    );
}

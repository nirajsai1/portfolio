import React, { useState, useCallback } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    const toggleDropdown = useCallback(() => {
        setIsDropdownOpen(prev => !prev);
    }, []);

    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    MyLogo
                </div>
                <div className="hidden md:flex space-x-6 items-center">
                    <NavItem href="#home">Home</NavItem>
                    <NavItem href="#about">About</NavItem>
                    <Dropdown
                        isDropdownOpen={isDropdownOpen}
                        toggleDropdown={toggleDropdown}
                    />
                    <NavItem href="#contact">Contact</NavItem>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="text-white focus:outline-none"
                        aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    >
                        <MenuIcon isOpen={isOpen} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <MobileMenu
                    isDropdownOpen={isDropdownOpen}
                    toggleDropdown={toggleDropdown}
                />
            )}
        </nav>
    );
}

function NavItem({ href, children }) {
    return (
        <a href={href} className="text-white hover:text-gray-300">
            {children}
        </a>
    );
}

function Dropdown({ isDropdownOpen, toggleDropdown }) {
    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="text-white hover:text-gray-300 focus:outline-none"
            >
                Services
            </button>
            {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                    <DropdownItem href="#web-development">Web Development</DropdownItem>
                    <DropdownItem href="#design">Design</DropdownItem>
                    <DropdownItem href="#seo">SEO</DropdownItem>
                </div>
            )}
        </div>
    );
}

function DropdownItem({ href, children }) {
    return (
        <a
            href={href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
            {children}
        </a>
    );
}

function MobileMenu({ isDropdownOpen, toggleDropdown }) {
    return (
        <div className="md:hidden">
            <NavItem href="#home">Home</NavItem>
            <NavItem href="#about">About</NavItem>
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="block text-white w-full text-left py-2 px-4 hover:bg-blue-700 focus:outline-none"
                >
                    Services
                </button>
                {isDropdownOpen && (
                    <div className="mt-1 bg-white rounded-md shadow-lg">
                        <DropdownItem href="#web-development">Web Development</DropdownItem>
                        <DropdownItem href="#design">Design</DropdownItem>
                        <DropdownItem href="#seo">SEO</DropdownItem>
                    </div>
                )}
            </div>
            <NavItem href="#contact">Contact</NavItem>
        </div>
    );
}

function MenuIcon({ isOpen }) {
    return (
        <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
        </svg>
    );
}

export default Navbar;

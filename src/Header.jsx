import React, { useState } from 'react';
import KaruLogo from './assets/Karu.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      
      <section className="bg-green-700 flex flex-wrap text-white gap-10 p-5">
        <span className="flex flex-wrap text-white gap-5 font-bold">
          <nav>Self Registration</nav>
          <nav>Fees Payment Letter</nav>
        </span>
        <span className="flex items-center justify-end flex-wrap w-full sm:w-auto">
          <ul className="flex gap-5 font-bold">
            <li><a href='#'>ODEL</a></li>
            <li><a href='#'>Staff Portal</a></li>
            <li><a href='#'>Student P ortal</a></li>
            <li><a href='#'>Tenders(0)</a></li>
            <li><a href='#'>Careers(0)</a></li>
          </ul>
          <button className="bg-amber-500 font-bold content-end p-2 sm:p-5 h-full">
            Provisional Graduation List (6.09.2024)
          </button>
        </span>
      </section>

      
      <section className="flex items-center justify-between p-3">
        
        <img className="h-20 w-80" src={KaruLogo} alt="Karu Logo" />

        
        <span className="hidden md:flex content-end text-black font-semibold gap-10 m-5">
          <h3 className="hover:text-amber-300 cursor-pointer">Home</h3>
          <h3 className="hover:text-amber-300 cursor-pointer">About Us</h3>
          <h3 className="hover:text-amber-300 cursor-pointer">Academics</h3>
          <h3 className="hover:text-amber-300 cursor-pointer">Students</h3>
          <h3 className="hover:text-amber-300 cursor-pointer">Library</h3>
          <h3 className="hover:text-amber-300 cursor-pointer">News</h3>
          <h3 className="hover:text-amber-300 cursor-pointer">Resources</h3>
        </span>

        <button 
          onClick={toggleMenu} 
          className="md:hidden text-black focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </section>
      <div 
        className={`${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col p-5 gap-5 text-black font-semibold">
          <li className="hover:text-amber-300 cursor-pointer">Home</li>
          <li className="hover:text-amber-300 cursor-pointer">About Us</li>
          <li className="hover:text-amber-300 cursor-pointer">Academics</li>
          <li className="hover:text-amber-300 cursor-pointer">Students</li>
          <li className="hover:text-amber-300 cursor-pointer">Library</li>
          <li className="hover:text-amber-300 cursor-pointer">News</li>
          <li className="hover:text-amber-300 cursor-pointer">Resources</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

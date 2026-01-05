import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex w-full flex-col bg-white dark:bg-slate-900 sticky top-0 z-50 shadow-sm border-b border-slate-200 dark:border-slate-800">
      <div className="flex flex-1 justify-center">
        <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
          <header className="flex items-center justify-between whitespace-nowrap px-4 py-3 md:px-10">
            <div className="flex items-center gap-4 text-slate-900 dark:text-white">
              <div className="size-8 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">public</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">TravelCo</h2>
            </div>
            
            <div className="hidden md:flex flex-1 justify-end gap-8">
              <div className="flex items-center gap-9">
                <div className="relative group">
                  <button className="flex items-center gap-1 text-slate-900 dark:text-slate-100 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                    Destinations
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform z-50">
                    <div aria-labelledby="options-menu" aria-orientation="vertical" className="py-1" role="menu">
                      <a className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary" href="#" role="menuitem">Asia</a>
                      <a className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary" href="#" role="menuitem">Europe</a>
                      <a className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary" href="#" role="menuitem">Americas</a>
                      <a className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary" href="#" role="menuitem">Africa</a>
                      <a className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary" href="#" role="menuitem">Oceania</a>
                    </div>
                  </div>
                </div>
                
                <div className="relative group">
                  <button className="flex items-center gap-1 text-slate-900 dark:text-slate-100 text-sm font-medium hover:text-primary transition-colors focus:outline-none">
                    Tours
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform z-50">
                    <div aria-labelledby="options-menu" aria-orientation="vertical" className="py-1" role="menu">
                      <a className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary" href="#" role="menuitem">Adventure</a>
                      <a className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary" href="#" role="menuitem">Cultural</a>
                      <a className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary" href="#" role="menuitem">Relaxation</a>
                      <a className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary" href="#" role="menuitem">Wildlife</a>
                      <a className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-primary" href="#" role="menuitem">Family</a>
                    </div>
                  </div>
                </div>
                
                <a className="text-slate-900 dark:text-slate-100 text-sm font-medium hover:text-primary transition-colors" href="#">About Us</a>
                <a className="text-slate-900 dark:text-slate-100 text-sm font-medium hover:text-primary transition-colors" href="#">Contact</a>
              </div>
              
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Book Now</span>
              </button>
            </div>
            
            <button 
              className="md:hidden text-slate-900 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;

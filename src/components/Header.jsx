import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Ugarit Digital" className="w-8 h-8" />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">
              Ugarit Digital
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-[#00F0FF] transition-colors">
              Home
            </Link>
            <Link to="/portfolio" className="text-white hover:text-[#00F0FF] transition-colors">
              Portfolio
            </Link>
            <Link to="/blog" className="text-white hover:text-[#00F0FF] transition-colors">
              Blog
            </Link>
            <Link to="/parceiros" className="text-white hover:text-[#00F0FF] transition-colors">
              Parceiros
            </Link>
            <Link to="/contact" className="text-white hover:text-[#00F0FF] transition-colors">
              Contato
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] hover:opacity-90 text-white font-medium rounded-full transition-all"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 
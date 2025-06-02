import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Instagram, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import UgaritLogo from '../assets/UgaritLogo.svg';
import WhatsAppIcon from '../assets/icons/whatsapp.svg';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Blog', path: '/blog' },
    { title: 'Parceiros', path: '/parceiros' },
    { title: 'Contato', path: '/contact' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* Header */}
      <header className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="responsive-container">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex items-center">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 400 400" 
                  className="opacity-80 hover:opacity-100 transition-opacity duration-300"
                >
                  {/* Centro */}
                  <circle 
                    cx="200" 
                    cy="200" 
                    r="40" 
                    fill="url(#gradient)"
                  />
                  
                  {/* Linhas de conexão */}
                  <line 
                    x1="200" y1="200" 
                    x2="100" y2="100" 
                    stroke="url(#gradient)" 
                    strokeWidth="20"
                  />
                  <line 
                    x1="200" y1="200" 
                    x2="300" y2="100" 
                    stroke="url(#gradient)" 
                    strokeWidth="20"
                  />
                  <line 
                    x1="200" y1="200" 
                    x2="300" y2="300" 
                    stroke="url(#gradient)" 
                    strokeWidth="20"
                  />
                  <line 
                    x1="200" y1="200" 
                    x2="100" y2="300" 
                    stroke="url(#gradient)" 
                    strokeWidth="20"
                  />
                  
                  {/* Esferas nas pontas */}
                  <circle cx="100" cy="100" r="30" fill="url(#gradient)" />
                  <circle cx="300" cy="100" r="30" fill="url(#gradient)" />
                  <circle cx="300" cy="300" r="30" fill="url(#gradient)" />
                  <circle cx="100" cy="300" r="30" fill="url(#gradient)" />
                  
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#00F0FF' }} />
                      <stop offset="100%" style={{ stopColor: '#9442FE' }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span 
                className="text-xl font-medium tracking-wide bg-gradient-to-r from-[#00F0FF] to-[#9442FE] bg-clip-text text-transparent"
                style={{ fontFamily: 'Avenir Next LT Pro, sans-serif' }}
              >
                Ugarit Digital
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors hover-neon-link
                    ${location.pathname === item.path 
                      ? 'neon-text-primary' 
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {item.title}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-[1px] left-0 right-0 h-0.5 neon-gradient"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10"
            >
              <div className="responsive-container py-4 space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-4 py-2 text-sm rounded-lg transition-colors hover-neon
                      ${location.pathname === item.path
                        ? 'neon-gradient text-black font-medium'
                        : 'text-gray-300 hover:bg-white/5'
                      }`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20">
        {children}
      </main>

      {/* Social Media Section */}
      <div className="w-full py-12 bg-black/30 backdrop-blur-sm border-t border-white/5">
        <div className="responsive-container">
          <div className="flex justify-center items-center space-x-8">
            <a 
              href="https://www.instagram.com/ugaritdigital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-neon group transition-all duration-300 p-4"
            >
              <Instagram 
                size={32} 
                className="text-[#E1306C] transition-all duration-300"
                style={{
                  filter: 'drop-shadow(0 0 5px #E1306C)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 15px #E1306C)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 5px #E1306C)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </a>
            <a 
              href="https://www.linkedin.com/company/ugaritdigital" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover-neon group transition-all duration-300 p-4"
            >
              <Linkedin 
                size={32} 
                className="text-[#0077B5] transition-all duration-300"
                style={{
                  filter: 'drop-shadow(0 0 5px #0077B5)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 15px #0077B5)';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 5px #0077B5)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5516996235750"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 group border border-[#25D366]/30 hover:border-[#25D366]/60"
      >
        <img 
          src={WhatsAppIcon} 
          alt="WhatsApp" 
          className="w-6 h-6 group-hover:animate-pulse" 
        />
      </a>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="responsive-container py-12">
          <div className="flex flex-col items-center justify-center space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 400 400" 
                className="opacity-80"
              >
                {/* Centro */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="40" 
                  fill="url(#footerGradient)"
                />
                
                {/* Linhas de conexão */}
                <line 
                  x1="200" y1="200" 
                  x2="100" y2="100" 
                  stroke="url(#footerGradient)" 
                  strokeWidth="20"
                />
                <line 
                  x1="200" y1="200" 
                  x2="300" y2="100" 
                  stroke="url(#footerGradient)" 
                  strokeWidth="20"
                />
                <line 
                  x1="200" y1="200" 
                  x2="300" y2="300" 
                  stroke="url(#footerGradient)" 
                  strokeWidth="20"
                />
                <line 
                  x1="200" y1="200" 
                  x2="100" y2="300" 
                  stroke="url(#footerGradient)" 
                  strokeWidth="20"
                />
                
                {/* Esferas nas pontas */}
                <circle cx="100" cy="100" r="30" fill="url(#footerGradient)" />
                <circle cx="300" cy="100" r="30" fill="url(#footerGradient)" />
                <circle cx="300" cy="300" r="30" fill="url(#footerGradient)" />
                <circle cx="100" cy="300" r="30" fill="url(#footerGradient)" />
                
                <defs>
                  <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#00F0FF' }} />
                    <stop offset="100%" style={{ stopColor: '#9442FE' }} />
                  </linearGradient>
                </defs>
              </svg>
              <span 
                className="text-lg font-medium tracking-wide bg-gradient-to-r from-[#00F0FF] to-[#9442FE] bg-clip-text text-transparent"
                style={{ fontFamily: 'Avenir Next LT Pro, sans-serif' }}
              >
                Ugarit Digital
              </span>
            </div>

            {/* Links de Navegação */}
            <div className="flex flex-wrap justify-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-gray-400 hover:text-white transition-colors text-sm hover-neon-link"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Informações de Contato */}
            <div className="text-center space-y-2">
              <p className="text-gray-400 text-sm">contato@ugarit.digital</p>
              <p className="text-gray-400 text-sm">São Paulo, SP</p>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-400">
              <p>© {new Date().getFullYear()} Ugarit Digital. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 


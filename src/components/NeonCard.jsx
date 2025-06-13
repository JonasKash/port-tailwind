import React from 'react';
import { motion } from 'framer-motion';

const NeonCard = ({ 
  children, 
  className = '', 
  icon, 
  title, 
  subtitle,
  onClick,
  variant = 'default', // default, primary, secondary
  hover = true,
  glassmorphism = true
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'border-[#00F0FF]/20 hover:border-[#00F0FF]/40 shadow-[0_0_25px_rgba(0,240,255,0.1)]';
      case 'secondary':
        return 'border-[#9442FE]/20 hover:border-[#9442FE]/40 shadow-[0_0_25px_rgba(148,66,254,0.1)]';
      default:
        return 'border-white/10 hover:border-white/20';
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case 'primary':
        return 'text-[#00F0FF] drop-shadow-[0_0_3px_rgba(0,240,255,0.6)]';
      case 'secondary':
        return 'text-[#9442FE] drop-shadow-[0_0_3px_rgba(148,66,254,0.6)]';
      default:
        return 'text-white';
    }
  };

  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      whileTap={hover ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`
        rounded-2xl p-6 border transition-all duration-300
        ${glassmorphism ? 'bg-black/50 backdrop-blur-xl' : 'bg-black'}
        ${getVariantClasses()}
        ${onClick ? 'cursor-pointer' : ''}
        hover-neon-card
        ${className}
      `}
    >
      {/* Card Header */}
      {(icon || title || subtitle) && (
        <div className="mb-4">
          {icon && (
            <div className="mb-4">
              {React.cloneElement(icon, {
                className: `w-6 h-6 ${getIconColor()} group-hover:scale-110 transition-transform duration-300`
              })}
            </div>
          )}
          {title && (
            <h3 className={`text-xl font-bold mb-2 ${
              variant === 'primary' ? 'neon-text-primary' :
              variant === 'secondary' ? 'neon-text-secondary' :
              'text-white'
            }`}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-400 text-sm">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Card Content */}
      {children}
    </motion.div>
  );
};

export default NeonCard; 
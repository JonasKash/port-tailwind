import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NeonButton = ({
  children,
  to,
  href,
  onClick,
  variant = 'default', // default, solid, outline
  size = 'md', // sm, md, lg
  icon,
  iconPosition = 'right',
  className = '',
  disabled = false,
  loading = false,
  fullWidth = false,
  type = 'button'
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'lg':
        return 'px-8 py-4 text-lg';
      default:
        return 'px-6 py-3';
    }
  };

  const getVariantClasses = () => {
    if (disabled) {
      return 'bg-gray-800 text-gray-400 cursor-not-allowed border-gray-700';
    }

    switch (variant) {
      case 'solid':
        return 'neon-button-solid';
      case 'outline':
        return 'bg-transparent border-[var(--primary-neon)] text-[var(--primary-neon)] hover:bg-[var(--primary-neon)]/10';
      default:
        return 'neon-button';
    }
  };

  const buttonContent = (
    <>
      {loading ? (
        <div className="flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2">
          {icon && iconPosition === 'left' && icon}
          <span>{children}</span>
          {icon && iconPosition === 'right' && icon}
        </div>
      )}
    </>
  );

  const buttonClasses = `
    rounded-full font-medium transition-all duration-300
    inline-flex items-center justify-center
    ${getSizeClasses()}
    ${getVariantClasses()}
    ${fullWidth ? 'w-full' : ''}
    hover-neon-button
    ${className}
  `;

  // Se for um link interno (usando react-router)
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {buttonContent}
      </Link>
    );
  }

  // Se for um link externo
  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={buttonClasses}
      >
        {buttonContent}
      </a>
    );
  }

  // Se for um botão normal
  return (
    <motion.button
      whileHover={!disabled && !loading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.95 } : {}}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {buttonContent}
    </motion.button>
  );
};

export default NeonButton; 
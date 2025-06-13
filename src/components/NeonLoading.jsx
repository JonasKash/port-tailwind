import React from 'react';
import { motion } from 'framer-motion';

const NeonLoading = ({
  size = 'md', // sm, md, lg
  variant = 'default', // default, primary, secondary
  fullScreen = false,
  text,
  className = ''
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-6 h-6 border-2';
      case 'lg':
        return 'w-12 h-12 border-4';
      default:
        return 'w-8 h-8 border-3';
    }
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'border-[#00F0FF] border-t-transparent shadow-[0_0_15px_rgba(0,240,255,0.3)]';
      case 'secondary':
        return 'border-[#9442FE] border-t-transparent shadow-[0_0_15px_rgba(148,66,254,0.3)]';
      default:
        return 'border-white border-t-transparent';
    }
  };

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className={`
          rounded-full
          ${getSizeClasses()}
          ${getVariantClasses()}
        `}
      />
      {text && (
        <p className={`mt-4 text-sm font-medium
          ${variant === 'primary' ? 'text-[#00F0FF]' :
            variant === 'secondary' ? 'text-[#9442FE]' :
            'text-white'
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default NeonLoading; 
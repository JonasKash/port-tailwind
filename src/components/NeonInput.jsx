import React from 'react';

const NeonInput = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  success,
  icon,
  className = '',
  required = false,
  disabled = false,
  variant = 'default', // default, primary, secondary
  fullWidth = true,
  ...props
}) => {
  const getVariantClasses = () => {
    const baseClasses = 'px-4 py-2 bg-white/5 border rounded-lg focus:outline-none transition-all duration-300';
    
    if (error) {
      return `${baseClasses} border-[#FF4444] focus:border-[#FF4444] text-white`;
    }
    
    if (success) {
      return `${baseClasses} border-[#4ADE80] focus:border-[#4ADE80] text-white`;
    }

    switch (variant) {
      case 'primary':
        return `${baseClasses} border-[#00F0FF]/30 focus:border-[#00F0FF] text-white`;
      case 'secondary':
        return `${baseClasses} border-[#9442FE]/30 focus:border-[#9442FE] text-white`;
      default:
        return `${baseClasses} border-white/10 focus:border-white/30 text-white`;
    }
  };

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-300 mb-2">
          {label}
          {required && <span className="text-[#FF4444] ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {React.cloneElement(icon, {
              className: 'w-5 h-5 text-gray-400'
            })}
          </div>
        )}

        <input
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          required={required}
          className={`
            ${getVariantClasses()}
            ${icon ? 'pl-10' : ''}
            ${fullWidth ? 'w-full' : ''}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            hover-neon-input
            placeholder-gray-500
          `}
          {...props}
        />

        {error && (
          <p className="mt-2 text-sm text-[#FF4444]">{error}</p>
        )}

        {success && (
          <p className="mt-2 text-sm text-[#4ADE80]">{success}</p>
        )}
      </div>
    </div>
  );
};

export default NeonInput; 
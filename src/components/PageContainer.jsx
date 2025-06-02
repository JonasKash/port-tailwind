import React from 'react';
import { motion } from 'framer-motion';

const PageContainer = ({ 
  children, 
  title, 
  subtitle, 
  badge,
  className = '',
  hasGradientBackground = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen ${hasGradientBackground ? 'bg-gradient-to-br from-black via-[#1a1a1a] to-black' : ''} ${className}`}
    >
      {/* Decorative Elements */}
      <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#00F0FF]/5 blur-[100px] rounded-full animate-pulse"></div>
      <div className="absolute -right-20 bottom-20 w-64 h-64 bg-[#9442FE]/5 blur-[100px] rounded-full animate-pulse"></div>

      <div className="responsive-container section-padding relative">
        {/* Page Header */}
        {(title || subtitle || badge) && (
          <div className="text-center mb-16">
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="text-sm text-white/90">{badge}</span>
                </div>
              </motion.div>
            )}

            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                {title}
              </motion.h1>
            )}

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PageContainer; 
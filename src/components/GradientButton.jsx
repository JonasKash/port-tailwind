import React from "react";

export default function GradientButton({ children, leftIcon, rightIcon, className = "", variant = "default", ...props }) {
  let baseClasses =
    "px-8 py-4 rounded-full font-bold flex items-center justify-center gap-4 transition-all duration-300 focus:outline-none focus:ring-2";

  let variantClasses = "";
  if (variant === "dark") {
    variantClasses =
      "bg-gradient-to-r from-[#0a2a33] to-[#231a2b] border border-[#00eaff]/40 text-gray-200 shadow-[0_0_30px_#00eaff20] hover:shadow-[0_0_60px_#00eaff40] hover:brightness-110 focus:ring-[#00eaff]/40";
  } else {
    variantClasses =
      "bg-gradient-to-r from-[#00eaff] to-[#a259e6] text-white border border-[#00eaff]/30 shadow-[0_0_40px_#00eaff80] hover:shadow-[0_0_80px_#00eaffcc] hover:brightness-110 focus:ring-[#00eaff]/60";
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      <span className="font-bold whitespace-nowrap">{children}</span>
      {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </button>
  );
} 
import React from 'react'

const NavbarSkeleton = () => {
  return (
    <div className="flex h-16 items-center justify-between px-4 md:px-8 lg:px-12 xl:px-16">
      {/* Logo */}
      <div className="w-24 h-6 bg-slate-700 rounded animate-pulse"></div>

      {/* Links */}
      <div className="hidden md:flex items-center space-x-8">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="w-16 h-4 bg-slate-700 rounded animate-pulse"
          ></div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden w-8 h-8 bg-slate-700 rounded animate-pulse"></div>
    </div>
  );
};


export default NavbarSkeleton

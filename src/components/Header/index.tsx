import React from 'react';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header className="bg-white shadow-sm">
    <nav className="flex items-center justify-start px-4 py-2">
      {/* Logo will be added back when needed */}
      {siteTitle && (
        <h1 className="text-xl font-semibold text-secondary">{siteTitle}</h1>
      )}
    </nav>
  </header>
);

export default Header;

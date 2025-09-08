import React from 'react';

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => (
  <header className="text-transparent">
    <nav className="flex items-center justify-start px-4 py-2">
      {siteTitle && (
        <h1 className="text-xl font-semibold">{siteTitle}</h1>
      )}
    </nav>
  </header>
);

export default Header;

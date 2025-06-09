import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './navbar';
import { Footer } from './footer';

export const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
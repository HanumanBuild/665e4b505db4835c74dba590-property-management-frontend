
// src/pages/Home.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyList from '../components/PropertyList';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">Available Properties</h2>
          <div className="w-full mb-4">
            <PropertyList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

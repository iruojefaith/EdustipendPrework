
import './App.css';
import React from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

 export default function App() {
  return (
    <div className="app h-screen w-full ">
      <Navbar />
      <Home />
    </div>
  );
}



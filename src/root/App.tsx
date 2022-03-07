import React from 'react';
import './App.css';
import NavigationComponent from '../components/NavigationComponent';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavigationComponent />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

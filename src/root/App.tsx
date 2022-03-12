import React from 'react';
import '../styles/index.scss';
import { Outlet } from 'react-router-dom';
import NavigationComponent from '../components/NavigationComponent';
import StoriesButton from '../components/StoriesButton';

function App() {
  return (
    <>
      <NavigationComponent />
      <main>
        <Outlet />
        <StoriesButton />
      </main>
    </>
  );
}

export default App;

import './App.scss';
import { Outlet } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';

function App() {
  return (
    <>
      <NavbarComponent />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;

import '../styles/index.scss'
import NavbarComponent from '../components/NavbarComponent';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <NavbarComponent />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App

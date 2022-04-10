import '../../../styles/index.scss';
import NavbarAtom from '../../atoms/NavbarAtom';
import { Outlet } from 'react-router-dom';

function RootTemplate() {
  return (
    <>
      <NavbarAtom />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootTemplate;

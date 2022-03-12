import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';

function NavbarComponent(): JSX.Element {
  return (
    <header>
      <nav>
        <ul>
          {
            Object.values(routes).map(({ path, name }) => (
              <li key={`${path}-navbar-key`}>
                <Link to={path}>
                  {name}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default NavbarComponent;

import { Link } from 'react-router-dom';
import routes from '../../utils/routes';

function NavigationComponent(): JSX.Element {
  return (
    <header>
      <ul>
        {
          Object.values(routes).map(({ name, path }): JSX.Element => (
            <li key={`${name}-route`}>
              <Link to={path}>
                {name}
              </Link>
            </li>
          ))
        }
      </ul>
    </header>
  );
}

export default NavigationComponent;

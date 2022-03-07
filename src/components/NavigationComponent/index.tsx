import routes from '../../utils/routes';
import { Link } from 'react-router-dom';

function NavigationComponent(): JSX.Element {
  return (
    <header>
      <ul>
        {
          Object.values(routes).map(({ name, path }): JSX.Element => {
            return (
              <li key={`${name}-route`}>
                <Link to={path}>
                  {name}
                </Link>
              </li>
            );
          })
        }
      </ul>
    </header>
  );
}

export default NavigationComponent;

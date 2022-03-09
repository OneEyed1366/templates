import { useTranslation } from 'react-i18next';

import { useGetPokemonByNameQuery } from '../../store/services/pokemon';

function HomePage(): JSX.Element {
  const { t } = useTranslation();

  const { data, onError, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  if (onError) {
    return <h2>Error: {onError}</h2>
  }

  if (isLoading) {
    return <h3>Loading...</h3>
  }

  return (
    <article>
      <header>
        Home Page + {t('hello')}
      </header>
      <footer>
        { Object.entries(data).map(([key, value]) => {
          return <div key={`${key}-key`}>
            { key }
          </div>
        }) }
      </footer>
    </article>
  );
}

export default HomePage;

import { useTranslation } from 'react-i18next';

function HomePage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <article>
      Home Page +
      {' '}
      {t('hello')}
    </article>
  );
}

export default HomePage;

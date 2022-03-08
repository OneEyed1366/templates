import EN from '../public/locales/en/translation.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: {
      translation: typeof EN,
    };
  }
}

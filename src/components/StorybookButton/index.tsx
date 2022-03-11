import styles from './StorybookButton.module.scss';

interface props {
  backgroundColor?: string,
  label?: string,
}

function StorybookButton({ backgroundColor = '#000000', label = 'Click' }: props): JSX.Element {
  return (
    <button
      className={styles.wrapper}
      type={'button'}
      style={{
        backgroundColor,
      }}
    >
      {label}
    </button>
  );
}

export default StorybookButton;

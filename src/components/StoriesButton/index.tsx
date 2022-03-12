interface props {
  backgroundColor?: string,
  label?: string,
}

export function VanillaStoriesButton({ backgroundColor = '#000000', label = 'Click on me' }: props): JSX.Element {
  return (
    <button
      className="py-10 px-5"
      type="button"
      style={{
        backgroundColor,
      }}
    >
      {label}
    </button>
  );
}

export default VanillaStoriesButton;

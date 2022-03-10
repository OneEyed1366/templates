import { getByText, render, screen } from '@testing-library/react';
import CounterComponent from './index';

describe('CounterComponent', () => {
  it('can render component', () => {
    render(<CounterComponent  />);

    const container = screen.getByRole('article')

    expect(getByText(container, 'Counter')).toBeInTheDocument();
  });
});

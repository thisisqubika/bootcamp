import { render, screen } from '@testing-library/react';
import Welcome from '.';

describe('Welcome', () => {
  it('renders Welcome, Stranger!', () => {
    render(<Welcome />);
    const welcome = screen.getByText(/Welcome, Stranger!/i);
    expect(welcome).toBeInTheDocument();
  });
});

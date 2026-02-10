import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('Home', () => {
  it('renders heading', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Zara Shop' }),
    ).toBeInTheDocument();
  });
});

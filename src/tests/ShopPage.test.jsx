import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShopPage from '../components/ShopPage';

describe('Increment and decrement functions for cart amount', () => {
  it('increments once on plus click', async () => {
    render(<ShopPage />);
    const button = screen.getByRole('button', { name: '+' });

    act(async () => {
      await userEvent.click(button);
    });
    expect(screen.getByRole('props.items').textContent).toMatch('1');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ShopPage from '../components/ShopPage';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

describe('Increment and decrement functions for cart amount', () => {
  it('increments once on plus click', async () => {
    render(
      <BrowserRouter>
        <ShopPage />
      </BrowserRouter>
    );
    const button = screen.getByRole('button', { name: '+' });

    await act(async () => {
      await userEvent.click(button);
    });
    let num = Number(screen.getByRole('cart').innerHTML);
    expect(num).toBe(1);
  });
});

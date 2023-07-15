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

  it('decrements once on minus click', async () => {
    render(
      <BrowserRouter>
        <ShopPage />
      </BrowserRouter>
    );
    const plusButton = screen.getByRole('button', { name: '+' });
    const minusButton = screen.getByRole('button', { name: '-' });

    await act(async () => {
      await userEvent.click(plusButton);
    });
    await act(async () => {
      await userEvent.click(minusButton);
    });

    let num = Number(screen.getByRole('cart').innerHTML);
    expect(num).toBe(0);
  });

  it('does not decrement below 0', async () => {
    render(
      <BrowserRouter>
        <ShopPage />
      </BrowserRouter>
    );
    const plusButton = screen.getByRole('button', { name: '+' });
    const minusButton = screen.getByRole('button', { name: '-' });

    await act(async () => {
      await userEvent.click(plusButton);
    });
    await act(async () => {
      await userEvent.click(minusButton);
    });
    await act(async () => {
      await userEvent.click(minusButton);
    });

    let num = Number(screen.getByRole('cart').innerHTML);
    expect(num).toBe(0);
  });
});

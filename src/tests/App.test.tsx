import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders nav links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: /about/i });
  expect(aboutLink).toBeInTheDocument();

  const formsLink = screen.getByRole('link', { name: /forms/i });
  expect(formsLink).toBeInTheDocument();
});

test('renders not found page for unknown route', () => {
  render(
    <MemoryRouter initialEntries={['/unknown']}>
      <App />
    </MemoryRouter>
  );

  const notFoundText = screen.getByText(/404/i);
  expect(notFoundText).toBeInTheDocument();
});

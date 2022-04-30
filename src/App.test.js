import { render, screen } from '@testing-library/react';
import App from './App';

test('renders product list', () => {
  render(<App />);
  const container = document.createElement("div");
  document.body.appendChild(container);
});

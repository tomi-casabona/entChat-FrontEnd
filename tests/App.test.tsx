import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Test', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('should render input text', () => {
    const element = screen.getByPlaceholderText(/Envía un mensaje a entChat/i);
    expect(element).toBeInTheDocument();
  });
});

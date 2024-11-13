import { fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';
import { MessageProvider } from '../src/Context/MessagesContext';

describe('App Test', () => {
  beforeEach(() => {
    render(
      <MessageProvider>
        <App />
      </MessageProvider>
    );
  });

  test('should render an input with a placeholder with the text "Send a message to entChat"', () => {
    const element = screen.getByPlaceholderText(/Send a message to entChat/i);
    expect(element).toBeInTheDocument();
  });

  test('should render a submit button"', () => {
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
  });

  test('should display a user message when the send button is clicked', () => {
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/Send a message to entChat/i);

    fireEvent.change(input, {
      target: { value: 'Hello, im testing the chatbot' },
    });
    fireEvent.click(button);
    const messageElement = screen.getByText(/Hello, im testing the chatbot/i);
    expect(messageElement).toBeInTheDocument();
  });

  test('should respond with a bot message when a user submit a message', () => {
    const button = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/Send a message to entChat/i);
    fireEvent.change(input, {
      target: { value: 'Hello, im testing the chatbot' },
    });
    fireEvent.click(button);
    const botMessageElement = screen.getByText(/entBot:/i);
    const userMessageElement = screen.getByText(
      /Hello, im testing the chatbot/i
    );
    expect(botMessageElement).toBeInTheDocument();
    expect(userMessageElement).toBeInTheDocument();
  });
});

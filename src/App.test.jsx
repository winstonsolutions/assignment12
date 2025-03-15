/* eslint-disable react/prop-types, no-undef */
import { render, screen } from '@testing-library/react';
import App from './App';

// Simple mock of the component library, only mocking the Button component
jest.mock('@winstonsolutions/my-component-library', () => ({
  Button: ({ label, disabled }) => (
    <button data-testid="mock-button" disabled={disabled}>
      {label}
    </button>
  ),
}));

test('Button components render correctly', () => {
  render(<App />);

  // Get all buttons
  const buttons = screen.getAllByTestId('mock-button');

  // Verify there are two buttons
  expect(buttons).toHaveLength(2);

  // Verify first button is not disabled, second button is disabled
  expect(buttons[0]).not.toBeDisabled();
  expect(buttons[1]).toBeDisabled();

  // Verify button text
  expect(buttons[0]).toHaveTextContent('Test');
  expect(buttons[1]).toHaveTextContent('Test');
});

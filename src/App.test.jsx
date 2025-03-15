/* eslint-disable react/prop-types, no-undef */
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock of the component library with all required components
jest.mock('@winstonsolutions/my-component-library', () => ({
  Button: ({ label, disabled }) => (
    <button data-testid="mock-button" disabled={disabled}>
      {label}
    </button>
  ),
  Card: ({ title, content }) => (
    <div data-testid="mock-card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  ),
  Label: ({ text, disabled }) => (
    <label data-testid="mock-label" style={{ opacity: disabled ? 0.5 : 1 }}>
      {text}
    </label>
  ),
  Dropdown: ({ options }) => (
    <select data-testid="mock-dropdown">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  ),
  Table: ({ data, columns, disabled }) => (
    <table data-testid="mock-table" style={{ opacity: disabled ? 0.5 : 1 }}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
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

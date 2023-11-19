// import necessary react testing library helpers here
import { render, fireEvent, act } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

let getText, getValue, decrementText, incrementText;

beforeEach(() => {
  const renderedComponent = render(<Counter />);
  
  getText = renderedComponent.getByText;
  getValue = renderedComponent.getByTestId;
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const headerText = getText('Counter');
  incrementText = getText('+');
  decrementText = getText('-');

  expect(headerText).toBeInTheDocument;
  expect(incrementText.textContent).toBe(' + ');
  expect(decrementText.textContent).toBe(' - ');

});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterValue = getValue('count');
  expect(counterValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = parseInt(getValue('count').textContent);
  fireEvent.click(getText('+'));
  const updatedCount = parseInt(getValue('count').textContent);

  expect(updatedCount).toBe(initialCount + 1);
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above 
  const initialCount = parseInt(getValue('count').textContent);
  fireEvent.click(getText('-'));
  const updatedCount = parseInt(getValue('count').textContent);

  expect(updatedCount).toBe(initialCount - 1);
});

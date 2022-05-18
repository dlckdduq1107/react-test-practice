import { render, screen } from '@testing-library/react';
import App from './App';

test('숫자 0으로 시작', () => {
  render(<App />);
  const initNumber = screen.getByTestId('counter');
  expect(initNumber).toHaveTextContent(0);
});

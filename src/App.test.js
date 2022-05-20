import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('숫자 0으로 시작', () => {
  render(<App />);
  const initNumber = screen.getByTestId('counter');
  expect(initNumber).toHaveTextContent(0);
});

test('플러스 버튼 클릭시 1증가', () => {
  render(<App />);
  const btn = screen.getByTestId('plus-btn');
  fireEvent.click(btn);

  const counter = screen.getByTestId('counter');
  expect(counter).toHaveTextContent(1);
});

test('온오프 버튼 색 테스트', () => {
  render(<App />);
  const onOff = screen.getByTestId('on-off-button');
  expect(onOff).toHaveStyle({ backgroundColor: 'blue' });
});

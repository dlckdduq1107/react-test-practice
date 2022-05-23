import { findByTestId, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import App from './App';
import { server } from './mocks/server';

test('숫자 0으로 시작', () => {
  render(<App />);
  const initNumber = screen.getByTestId('counter');
  expect(initNumber).toHaveTextContent(0);
});

test('플러스 버튼 클릭시 1증가', () => {
  render(<App />);
  const btn = screen.getByTestId('plus-btn');
  userEvent.click(btn);

  const counter = screen.getByTestId('counter');
  expect(counter).toHaveTextContent(1);
});

test('온오프 버튼 색 테스트', () => {
  render(<App />);
  const onOff = screen.getByTestId('on-off-button');
  expect(onOff).toHaveStyle({ backgroundColor: 'blue' });
});

test('disabled test', () => {
  render(<App />);
  const onOff = screen.getByTestId('on-off-button');
  userEvent.click(onOff);

  const plusBtn = screen.getByTestId('plus-btn');
  expect(plusBtn).toBeDisabled();
});

test('fetching server', async () => {
  render(<App />);

  const options = await screen.findAllByRole('checkbox');
  expect(options).toBeInTheDocument().toHaveLength(1);
});

test('server error test', async () => {
  server.resetHandlers(
    rest.get('http://localhost:5000/products', (req, res, ctx) => {
      res(ctx.status(500));
    })
  );

  render(<App />);

  const errorBanner = await screen.findByTestId('error-banner');
  expect(errorBanner).toHaveTextContent('error 발생');
});

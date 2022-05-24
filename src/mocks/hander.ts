import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:5000/products', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'snack',
          price: 1000,
        },
      ])
    );
  }),
];

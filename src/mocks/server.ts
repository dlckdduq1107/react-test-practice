import { setupServer } from 'msw/node';
import { handlers } from './hander';

export const server = setupServer(...handlers);

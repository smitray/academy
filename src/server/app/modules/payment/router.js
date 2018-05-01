import {
  paymentAll,
  paymentSingle,
  paymentCreate,
  paymentUpdate,
  paymentDelete
} from './controller';

export const baseUrl = '/api/payment';

export const routes = [
  {
    method: 'GET',
    route: '/',
    handlers: [
      paymentAll
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      paymentSingle
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      paymentUpdate
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      paymentDelete
    ]
  },
  {
    method: 'POST',
    route: '/',
    handlers: [
      paymentCreate
    ]
  }
];

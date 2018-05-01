import { isAuthenticated } from '@mid';

import filesCreate from './controller';

export const baseUrl = '/api/files';

export const routes = [
  {
    method: 'POST',
    route: '/',
    handlers: [
      isAuthenticated,
      filesCreate
    ]
  }
];

import { isAuthenticated } from '@mid';

import {
  courseAll,
  courseSingle,
  courseCreate,
  courseUpdate,
  courseDelete,
  lectureCreate,
  contentCreate,
  createTest,
  enrollStudent
} from './controller';


export const baseUrl = '/api/course';

export const routes = [
  {
    method: 'GET',
    route: '/',
    handlers: [
      courseAll
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      courseSingle
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      isAuthenticated,
      courseUpdate
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      courseDelete
    ]
  },
  {
    method: 'POST',
    route: '/',
    handlers: [
      isAuthenticated,
      courseCreate
    ]
  },
  {
    method: 'POST',
    route: '/test',
    handlers: [
      isAuthenticated,
      createTest
    ]
  },
  {
    method: 'POST',
    route: '/lecture',
    handlers: [
      isAuthenticated,
      lectureCreate
    ]
  },
  {
    method: 'POST',
    route: '/content',
    handlers: [
      isAuthenticated,
      contentCreate
    ]
  },
  {
    method: 'POST',
    route: '/enroll',
    handlers: [
      isAuthenticated,
      enrollStudent
    ]
  }
];

import { isAuthenticated } from '@mid';

import {
  authLocal,
  authSocial,
  getMe,
  getOther,
  updateMe,
  deleteMe,
  logMeOut,
  getMyCourseAuthor,
  getMyCourseStudent,
  getMembers
} from './controller';

export const baseUrl = '/api';

export const routes = [
  {
    method: 'POST',
    route: '/auth/local',
    handlers: [
      authLocal
    ]
  },
  {
    method: 'POST',
    route: '/auth/social',
    handlers: [
      authSocial
    ]
  },
  {
    method: 'GET',
    route: '/user',
    handlers: [
      isAuthenticated,
      getMe
    ]
  },
  {
    method: 'GET',
    route: '/user/course/author',
    handlers: [
      isAuthenticated,
      getMyCourseAuthor
    ]
  },
  {
    method: 'GET',
    route: '/user/course/student',
    handlers: [
      isAuthenticated,
      getMyCourseStudent
    ]
  },
  {
    method: 'GET',
    route: '/user/logout',
    handlers: [
      logMeOut
    ]
  },
  {
    method: 'PUT',
    route: '/user/other',
    handlers: [
      updateMe
    ]
  },
  {
    method: 'DELETE',
    route: '/user/:id',
    handlers: [
      deleteMe
    ]
  },
  {
    method: 'GET',
    route: '/user/members/:type',
    handlers: [
      getMembers
    ]
  },
  {
    method: 'GET',
    route: '/user/:id',
    handlers: [
      getOther
    ]
  }
];

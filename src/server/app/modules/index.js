import Router from 'koa-router';

import { authRouteProps } from './auth';
import { courseRouteProps } from './course';
import { filesRouteProps } from './files';

const routerControllPros = [
  authRouteProps,
  courseRouteProps,
  filesRouteProps
];

let instance;

const routerControl = (app) => {
  routerControllPros.forEach((routeProperty) => {
    instance = new Router({ prefix: routeProperty.baseUrl });
    routeProperty.routes.forEach((config) => {
      const {
        method = '',
        route = '',
        handlers = []
      } = config;

      const lastHandler = handlers.pop();

      instance[method.toLowerCase()](route, ...handlers, async (ctx) => {
        const hddd = await lastHandler(ctx);
        return hddd;
      });

      app
        .use(instance.routes())
        .use(instance.allowedMethods());
    });
  });
};

export default routerControl;

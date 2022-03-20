const routes = [
  require('./user').default,
  require('./post').default,
  require('./admin').default,
  require('./comment').default,
];

const setupRoutes = (app, prefix) => {
  routes.forEach((route) => app.use(prefix, route));
};

export default setupRoutes;

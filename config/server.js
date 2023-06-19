  module.exports = ({ env }) => ({
  host: env('SERVER_HOST', 'localhost'),
  port: env.int('SERVER_PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

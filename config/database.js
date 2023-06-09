const path = require('path');

module.exports = ({ env }) => {
  const client = env('DB_CLIENT', 'mysql');

  const connections = {
    mysql: {
      connection: {
        connectionString: env('DB_URL'),
        host: env('DB_HOST', 'localhost'),
        port: env.int('DB_PORT', 3306),
        database: env('DB_NAME', 'strapi'),
        user: env('DB_USER', 'strapi'),
        password: env('DB_PASSWORD', 'strapi'),
        ssl: env.bool('DB_SSL', false) && {
          key: env('DB_SSL_KEY', undefined),
          cert: env('DB_SSL_CERT', undefined),
          ca: env('DB_SSL_CA', undefined),
          capath: env('DB_SSL_CAPATH', undefined),
          cipher: env('DB_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DB_SSL_REJECT_UNAUTHORIZED',
            true
          ),
        },
      },
      pool: { min: env.int('DB_POOL_MIN', 2), max: env.int('DB_POOL_MAX', 10) },
    },
    mysql2: {
      connection: {
        host: env('DB_HOST', 'localhost'),
        port: env.int('DB_PORT', 3306),
        database: env('DB_NAME', 'strapi'),
        user: env('DB_USER', 'strapi'),
        password: env('DB_PASSWORD', 'strapi'),
        ssl: env.bool('DB_SSL', false) && {
          key: env('DB_SSL_KEY', undefined),
          cert: env('DB_SSL_CERT', undefined),
          ca: env('DB_SSL_CA', undefined),
          capath: env('DB_SSL_CAPATH', undefined),
          cipher: env('DB_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DB_SSL_REJECT_UNAUTHORIZED',
            true
          ),
        },
      },
      pool: { min: env.int('DB_POOL_MIN', 2), max: env.int('DB_POOL_MAX', 10) },
    },
    postgres: {
      connection: {
        connectionString: env('DB_URL'),
        host: env('DB_HOST', 'localhost'),
        port: env.int('DB_PORT', 5432),
        database: env('DB_NAME', 'strapi'),
        user: env('DB_USER', 'strapi'),
        password: env('DB_PASSWORD', 'strapi'),
        ssl: env.bool('DB_SSL', false) && {
          key: env('DB_SSL_KEY', undefined),
          cert: env('DB_SSL_CERT', undefined),
          ca: env('DB_SSL_CA', undefined),
          capath: env('DB_SSL_CAPATH', undefined),
          cipher: env('DB_SSL_CIPHER', undefined),
          rejectUnauthorized: env.bool(
            'DB_SSL_REJECT_UNAUTHORIZED',
            true
          ),
        },
        schema: env('DB_SCHEMA', 'public'),
      },
      pool: { min: env.int('DB_POOL_MIN', 2), max: env.int('DB_POOL_MAX', 10) },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          '..',
          env('DB_FILENAME', 'data.db')
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DB_CONNECTION_TIMEOUT', 60000),
    },
  };
};

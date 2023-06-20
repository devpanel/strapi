module.exports = {
      apps: [
        {
          name: 'app',
          script: 'npm',
          args: 'run start_prod',
          env: {
            NODE_ENV: "production"
          }
        },
      ],
    };

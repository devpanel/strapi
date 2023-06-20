module.exports = {
      apps: [
        {
          name: 'app',
          script: 'npm',
          args: 'start prod',
          env: {
            NODE_ENV: "production"
          }
        },
      ],
    };

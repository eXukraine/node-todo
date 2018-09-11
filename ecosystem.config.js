module.exports = {
  apps: [{
    name: 'API',
    script: './.bin/www',
    env: {
      NODE_ENV: 'development',
      PORT: 3001,
      HOST: 'localhost',
    },
    env_production: {
      NODE_ENV: 'production',
    },
    watch: true,
  }],

  deploy: {
    production: {
      user: 'node',
      host: '212.83.163.1',
      ref: 'origin/master',
      repo: 'git@github.com:repo.git',
      path: '/var/www/production',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};

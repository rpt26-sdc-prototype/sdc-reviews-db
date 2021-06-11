module.exports = {
  apps: [{
    name: 'sdc-reviews-db',
    script: './server/db-server.js'
  }],
  deploy: {
    production: {
      user: 'database',
      host: 'ec2-3-140-90-28.us-east-2.compute.amazonaws.com',
      key: './sdc-db.pem',
      ref: 'origin/main',
      repo: 'git@github.com:rpt26-sdc-prototype/sdc-reviews-db.git',
      path: '/home/ubuntu/sdc-db',
      'post-deploy': 'npm install && pm2 startOrRestart ./server/ecosystem.config.js'
    }
  }
}
module.exports = {
  apps: [{
  name: 'APIServer',
  script: './server.js',
  instances: 0,
  exec_mode: `cluster`
  }]
}
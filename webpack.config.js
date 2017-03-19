module.exports = (env = 'common') => (
  require('./config/' + env + '.js')
);

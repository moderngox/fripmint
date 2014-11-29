//server.js
var deployd = require('deployd');
var port = process.env.OPENSHIFT_NODEJS_PORT;
var ip = process.env.OPENSHIFT_NODEJS_IP;
var server = deployd({
 
  env: 'development', // 'production' provokes an auth error on the dashboard page
  db: {
    host: '127.10.100.130',
    port: 27017,
    name: 'fripmint',
    credentials: {
      username: 'admin',
      password: 'BSAJVyd7hFm2'
    }
  }
});

server.listen(port, ip);

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});
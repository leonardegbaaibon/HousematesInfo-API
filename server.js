const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middelwares = jsonServer.defaults();
const port = process.env.PORT || 3005;


server.use(middelwares);
server.use(router);


server.listen(port)
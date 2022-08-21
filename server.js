const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); 

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200; // <== You can change the port

server.db = router.db

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})
server.use(auth);
server.use(middlewares);
server.use(router);

server.listen(port);
const jsonServer = require('json-server');

const cors = require('cors');
const auth = require('json-server-auth');
const server = jsonServer.create();
server.use(cors());
const router = jsonServer.router('db.json'); 

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; // <== You can change the port

server.db = router.db

server.use(auth);
server.use(middlewares);
server.use(router);

server.listen(port);
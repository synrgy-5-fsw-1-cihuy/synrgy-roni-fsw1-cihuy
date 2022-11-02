const http = require("http");
const router = require("./router");

const server = http.createServer(router);

const PORT = 3000 || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

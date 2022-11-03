const http = require("http");
const router = require("./router");

const server = http.createServer(router);

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

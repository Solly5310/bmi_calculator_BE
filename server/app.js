const axios = require("axios");
const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

const server = http.createServer(app);

server.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});

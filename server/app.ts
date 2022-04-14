const axios = require("axios");
const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

const server = http.createServer(app);


//We need to figure out typescript for req and res
app.get("/weight/metric", async (req: any, res: any) => {
  
  let weight = req.query.weight *1
  let height  = req.query.height *1
  let bmi = (weight / ((height * height) / 10000)).toFixed(0);
  console.log(bmi)
  
  res.status(200).json({ status: "nup nup"});
});


app.get("/weight/us", async (req: any, res: any) => {
  
  let weight = req.query.weight *1
  let height  = req.query.height *1
  let bmi = ((weight * 703) / (height * height)).toFixed(0);
  
  console.log(bmi)
  
  res.status(200).json({ status: "nup nup"});
});



server.listen(port, (req: any, res:any) => {
  console.log(`listening on port ${port}`);
});

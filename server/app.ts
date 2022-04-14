const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();


app.use(express.json());


app.use(cors());


const port = 443;

const server = http.createServer(app);


//We need to figure out typescript for req and res
app.get("/weight/metric", async (req: any, res: any) => {
  
  let weight = req.query.weight *1
  let height  = req.query.height *1
  let bmi = (weight / ((height * height) / 10000)).toFixed(0);
  console.log(bmi)
  
  res.status(200).json({ status: "ok", bmi: bmi});
});


app.get("/weight/us", async (req: any, res: any) => {
  
  let weight = req.query.weight *1
  let height  = req.query.height *1
  let bmi = ((weight * 703) / (height * height)).toFixed(0);
  
  console.log(bmi)
  
  res.status(200).json({ status: "ok", bmi: bmi});
});



server.listen(port, (req: any, res:any) => {
  console.log(`listening on port ${port}`);
});

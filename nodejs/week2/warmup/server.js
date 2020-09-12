const express = require("express");

const app = express();




app.get("/", async (req, res) => {
  res.send("<h1>Warm up -home page </h1>");
});

app.get(
  "/numbers/add?",
  async (req, res) => {
    let num1 = req.query.first;
    let num2 = req.query.second;
    // @ts-ignore
    let result = parseInt(num1) + parseInt(num2);
    

    res.send({result});
  }
);
app.get("/numbers/multiply/:f/:s", (req, res) => {
  let num1 = req.params.f;
  let num2 = req.params.s;
 
  let result = parseInt(num1) * parseInt(num2);

  res.send( {result} );
  
});


app.listen(3000, ()=> console.log("server run with 3000 port"));

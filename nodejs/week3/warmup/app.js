const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.get("/calculator", async (req, res) => {
  res.send("warmup ");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post("/calculator/:Calculation", async (req, res) => {
  let Calculation = req.params.Calculation;
  let lowercaseCalc = Calculation.toLowerCase();
  let queries = req.query;
  if (lowercaseCalc === "multiply") {
    
    try {
     let result = Object.values(queries).reduce(
       (a, b) => Number(a) * Number(b),
       1
     );
     res.json(result)
     
    } catch (error){
      return res.status(404).send("Bad request").end();
      console.log(error)
    }
  } else if (lowercaseCalc === "add") {
   try {
     let result = Object.values(queries).reduce(
       (a, b) => Number(a) + Number(b),0);
     res.json(result);
   } catch {
     return res.status(404).send("Bad request").end();
   }
  } else if (lowercaseCalc === "substract") {
   try {
     function substacrFunc(total, num) {
       return Number(total) -  Number(num);
     }
     
     let result = Object.values(queries).reduce(substacrFunc);
     res.json(result);
   } catch {
     return res.status(404).send("Bad request").end();
   }
  } else if (lowercaseCalc === "divide") {
    try {
      function divideFunc(total , num){
        return Number(total) / Number(num) ;
      }
      let result = Object.values(queries).reduce(divideFunc);
      res.json(result);
    } catch {
      return res.status(404).send("Bad request").end();
    }
  } else {
    res.send(`${lowercaseCalc} not Calculation`);
  }
});
module.exports = app
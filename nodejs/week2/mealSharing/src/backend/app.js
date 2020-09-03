const express = require("express");
const app = express();



// default route.
app.get("/", async (request, response) => {
  response.send("<h1>Meal Sharing</h1>");
});

//  meals route.
const meals = require("./routes/meals.js");
app.use("/meals",meals)


// reservations route
const reservations = require("./routes/reservations.js");
app.use("/reservations", reservations);

// reviews route
const reviews = require("./routes/reviews.js");
app.use("/reviews", reviews);


module.exports = app;

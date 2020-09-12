 nodejs/week2



 master
const express = require("express");
const app = express();



 nodejs/week2
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

const meals = require("./routes/meals.js");

const cheapmeal = require("./routes/cheapMeals");

const largemeals = require("./routes/largemeals");
const randomMeal = require("./routes/meal");

const reservations = require("./routes/reservations");
const randomreservations = require("./routes/randomReservation");
app.get("/", async (request, response) => {
  response.send("Meal Sharing");
});

app.get("/meals", (request, response) => {
  response.send(meals);
});

app.get("/cheapMeals", (request, response) => {
  response.send(cheapmeal);
});
app.get("/largeMeals", (request, response) => {
  response.send(largemeals);
});
app.get("/meal", (request, response) => {
  response.send(randomMeal);
});
app.get("/reservations", (request, response) => {
  response.send(reservations);
});

app.get("/randomreservation", (request, response) => {
  response.send(randomreservations);
});
module.exports = app;


// import data from meals here







 master

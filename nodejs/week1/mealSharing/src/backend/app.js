

const express = require("express");
const app = express();



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

app.get("/cheap-meals", (request, response) => {
  response.send(cheapmeal);
});
app.get("/large-meals", (request, response) => {
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







